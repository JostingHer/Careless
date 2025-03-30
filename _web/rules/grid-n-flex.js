import stylelint from "stylelint";

const ruleName = "thecookies-rules/grid-n-flex";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: "Expected ...",
});
const meta = {
    url: "https://github.com/foo-org/stylelint-foo/blob/main/src/rules/foo-bar/README.md",
    // deprecated: true,
};

const ruleFunction = (primaryOption, secondaryOptionObject) => {
    return (postcssRoot, postcssResult) => {
        const displayContext = {};
        if (primaryOption) {
            postcssRoot.walkRules((rule) => {
                // Almacena el valor de display para el selector actual
                rule.walkDecls((decl) => {
                    if (decl.prop === "display") {
                        displayContext[rule.selector] = decl.value;
                    }
                });

                // Verifica las declaraciones de align-items
                rule.walkDecls((decl) => {
                    if (decl.prop === "align-items") {
                        const currentDisplay =
                            displayContext[rule.selector] || "";

                        if (
                            currentDisplay.includes("grid") &&
                            (decl.value === "flex-start" ||
                                decl.value === "flex-end")
                        ) {
                            postcssResult.warn(
                                "You are using flex-start or flex-end in grid",
                                {
                                    node: decl,
                                    word: decl.value,
                                    severity: secondaryOptionObject?.severity
                                        ? secondaryOptionObject.severity
                                        : "error",
                                },
                            );
                        }

                        if (
                            currentDisplay.includes("flex") &&
                            (decl.value === "start" || decl.value === "end")
                        ) {
                            postcssResult.warn(
                                "You are using start or end in flex",
                                {
                                    node: decl,
                                    word: decl.value,
                                    severity: secondaryOptionObject?.severity
                                        ? secondaryOptionObject.severity
                                        : "error",
                                },
                            );
                        }
                    }
                });
            });
        }
    };
};
ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default stylelint.createPlugin(ruleName, ruleFunction);
