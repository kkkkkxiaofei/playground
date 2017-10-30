module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-console": 0
    },
    "globals": {
        "expect": true
    }
};