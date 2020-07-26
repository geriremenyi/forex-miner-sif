const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '~app': path.resolve(__dirname, "./src/app"),
            "~components": path.resolve(__dirname, "./src/components"),
            "~store": path.resolve(__dirname, "./src/store"),
            "~utilities": path.resolve(__dirname, "./src/utilities"),
            "~api": path.resolve(__dirname, "./src/common/api"),
            "~":  path.resolve(__dirname),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "~app/(.*)": "<rootDir>/src/app/$1",
                "~components/(.*)": "<rootDir>/src/components/$1",
                "~store/(.*)": "<rootDir>/src/store/$1",
                "~utilities/(.*)": "<rootDir>/src/utilities/$1",
                "~api/(.*)": "<rootDir>/src/common/api/$1",
                "~/(.*)": "<rootDir>/src/$1"
            }
        }
    }
}