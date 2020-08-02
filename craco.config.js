const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '~app': path.resolve(__dirname, "./src/app"),
            '~user': path.resolve(__dirname, "./src/app/user"),
            '~login': path.resolve(__dirname, "./src/app/user/login"),
            "~common": path.resolve(__dirname, "./src/common"),
            "~api": path.resolve(__dirname, "./src/common/api"),
            "~router": path.resolve(__dirname, "./src/common/router"),
            "~utilities": path.resolve(__dirname, "./src/common/utilities"),
            "~components": path.resolve(__dirname, "./src/components"),
            "~store": path.resolve(__dirname, "./src/store"),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "~app/(.*)": "<rootDir>/src/app/$1",
                "~user/(.*)": "<rootDir>/src/app/user/$1",
                "~login/(.*)": "<rootDir>/src/app/user/login/$1",
                "~common/(.*)": "<rootDir>/src/common/$1",
                "~api/(.*)": "<rootDir>/src/common/api/$1",
                "~router/(.*)": "<rootDir>/src/common/router/$1",
                "~utilities/(.*)": "<rootDir>/src/common/utilities/$1",
                "~components/(.*)": "<rootDir>/src/components/$1",
                "~store": "<rootDir>/src/store",
            }
        }
    }
}