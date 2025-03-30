import stylelint from "stylelint";

const ruleName = "thecookies-rules/border";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: "Expected ...",
});

const meta = {
    description: "using '1px solid red' for borders?",
    category: "Best Practices",
    recommended: true,
    url: "https://github.com/foo-org/stylelint-foo/blob/main/src/rules/foo-bar/README.md",
};

const ruleFunction = (primaryOption, secondaryOptionObject) => {
    return (postcssRoot, postcssResult) => {
        postcssRoot.walkDecls((decl) => {
            if (
                (decl.prop === "border" && decl.value === "1px solid red") ||
                decl.value === "1px solid deeppink"
            ) {
                postcssResult.warn(
                    "You are using '1px solid red or deeppink' for borders",
                    {
                        node: decl,
                        word: decl.value,
                        severity: secondaryOptionObject?.severity
                            ? secondaryOptionObject.severity
                            : "error",
                    },
                );
            }
        });
    };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default stylelint.createPlugin(ruleName, ruleFunction);
