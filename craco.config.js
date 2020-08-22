const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "~api": path.resolve(__dirname, "./src/api"),
            '~app': path.resolve(__dirname, "./src/app"),
            '~user': path.resolve(__dirname, "./src/app/user"),
            '~login': path.resolve(__dirname, "./src/app/user/login"),
            "~common": path.resolve(__dirname, "./src/common"),
            "~components": path.resolve(__dirname, "./src/components"),
            "~store": path.resolve(__dirname, "./src/store"),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "~api/(.*)": "<rootDir>/src/api/$1",
                "~app/(.*)": "<rootDir>/src/app/$1",
                "~user/(.*)": "<rootDir>/src/app/user/$1",
                "~login/(.*)": "<rootDir>/src/app/user/login/$1",
                "~common/(.*)": "<rootDir>/src/common/$1",
                "~components/(.*)": "<rootDir>/src/components/$1",
                "~store": "<rootDir>/src/store",
            }
        }
    }
}