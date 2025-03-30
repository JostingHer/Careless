export default {
    parallel: 2,
    format: ["html:src/public/cucumber-report.html"],
    paths: ["web/features"],
    import: ["features/**/*.@(js|cjs|mjs)"],
    language: "es",
};
