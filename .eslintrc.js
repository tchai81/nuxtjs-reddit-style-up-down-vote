module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'space-before-function-paren': 0,
        indent: 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-undef': 1,
        'no-new': 1,
        'eol-last': 1,
        'space-unary-ops': 0,
        'comma-dangle': ['error', 'never']
    }
}