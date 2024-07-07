module.exports = {
    /*
     * https://stackoverflow.com/a/54513338/1618592
     * Mock out resource files (which Jest will attempt to parse as JS) with this file.
     * Resource file imports are "default" imports, and this file does not have a default
     * export because 'default' is an invalid configuration option, so resource imports
     * will be validly mocked as undefined. This is a neat hack for boilerplate code, but
     * for real resource mocking, it probably makes sense to point to real mock modules.
     */
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest.config.js",
        "\\.(css|less)$": "<rootDir>/jest.config.js"
    }
}
