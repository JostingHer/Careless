import stylelint from "stylelint";

const ruleName = "thecookies-rules/mobile-first";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: "Expected ...",
});

const meta = {
    docs: {
        description: "Media Query max-width is mobile first?",
        category: "Best Practices",
        recommended: true,
        url: "https://github.com/foo-org/stylelint-foo/blob/main/src/rules/foo-bar/README.md",
    },
};

const ruleFunction = (primaryOption, secondaryOptionObject) => {
    return (root, result) => {
        if (primaryOption) {
            root.walkAtRules((atRule) => {
                if (
                    atRule.name === "media" &&
                    atRule.params.includes("max-width") &&
                    !atRule.params.includes("_max-width")
                ) {
                    result.warn(
                        "You are using max-width inside @media without a mobile-first approach",
                        {
                            node: atRule,
                            word: "max-width",
                            severity: secondaryOptionObject?.severity
                                ? secondaryOptionObject.severity
                                : "error",
                        },
                    );
                }
            });
        }
    };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default stylelint.createPlugin(ruleName, ruleFunction);
