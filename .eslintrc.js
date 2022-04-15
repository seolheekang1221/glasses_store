module.exports = {
    env: {
        browser: true
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        eqeqeq: "warn",
        semi: "warn",
        "no-console": "off",
        "no-debugger": "off",
        "no-alert": "warn",
        "no-else-return": "warn",
        "vars-on-top": "off",
        "linebreak-style": "off"
    }
};
