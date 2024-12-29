/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-clean-order/error",
    ],
    plugins: [
        "stylelint-scss",
        "stylelint-selector-bem-pattern",
        "./rules/grid-n-flex.js",
        "./rules/mobile-first.js",
        "./rules/border",
    ],
    rules: {
        // recommended rules
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        // ...
        // any other rules you'd want to change e.g.
        "media-query-no-invalid": null,
        "scss/dollar-variable-pattern": null,
        "scss/selector-no-redundant-nesting-selector": true,
        "custom-property-pattern": "-.+",
        "selector-class-pattern": [
            // Expresión regular para seguir las convenciones BEM
            "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__([a-z0-9]+(?:-[a-z0-9]+)*))?(?:--([a-z0-9]+(?:-[a-z0-9]+)*))?$",
            {
                message:
                    "Las clases deben seguir el formato BEM (block__element--modifier)",
            },
        ],
        "plugin/selector-bem-pattern": {
            componentName: "[A-Z]+",
            componentSelectors: {
                initial: "^\\.{componentName}(?:-[a-z]+)?$",
                combined: "^\\.combined-{componentName}-[a-z]+$",
            },
            utilitySelectors: "^\\.util-[a-z]+$",
        },
        "thecookies-rules/grid-n-flex": true,
        "thecookies-rules/mobile-first": [
            true,
            {
                severity: "warning",
            },
        ],
        "thecookies-rules/border": true,
    },
    ignoreFiles: [
        "**/node_modules/**",
        "**/dist/**",
        "**/_modules.scss",
        "**/_atoms.scss",
        "**/_molecules.scss",
        "**/_organisms.scss",
        "**/_elements.scss",
        "**/_layouts.scss",
        "**/_generic.scss",
        "**/_objects.scss",
        "**/_utilities.scss",
    ],
};
