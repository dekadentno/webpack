module.exports = {
    "helpers": {
        "if_or": function ( v1, v2, options ) {
            if ( v1 || v2 ) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author",
            "required": false,
            "default": "Barrage"
        },
        "build": {
            "type": "list",
            "message": "Vue build",
            "choices": [
                {
                    "name": "Runtime + Compiler: recommended for most users",
                    "value": "standalone",
                    "short": "standalone"
                },
                {
                    "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
                    "value": "runtime",
                    "short": "runtime"
                }
            ]
        },
        "router": {
            "type": "confirm",
            "message": "Install vue-router?"
        },
        "dateLibrary": {
            "type": "confirm",
            "message": "Use a date library tool?"
        },
        "dateLibraryConfig": {
            "when": "dateLibrary",
            "type": "list",
            "message": "Pick a date library tool",
            "choices": [
                {
                    "name": "Date-Fns",
                    "value": "datefns",
                    "short": "datefns"
                },
                {
                    "name": "Moment.js",
                    "value": "moment",
                    "short": "moment"
                }
            ]
        },
        "socket": {
            "type": "confirm",
            "message": "Install vue-socket.io?"
        },
        "lodash": {
            "type": "confirm",
            "message": "Install lodash?"
        },
        "noty": {
            "type": "confirm",
            "message": "Install Noty?"
        },
        "charts": {
            "type": "confirm",
            "message": "Use a chart library?"
        },
        "chartsConfig": {
            "when": "charts",
            "type": "list",
            "message": "Pick a chart library: ",
            "choices": [
                {
                    "name": "G2",
                    "value": "g2",
                    "short": "g2"
                },
                {
                    "name": "Chart.js",
                    "value": "chartjs",
                    "short": "chartjs"
                }
            ]
        },
        "stateManagement": {
            "type": "confirm",
            "message": "Use a state management tool?"
        },
        "stateManagementConfig": {
            "when": "stateManagement",
            "type": "list",
            "message": "Pick a state management tool: ",
            "choices": [
                {
                    "name": "Vue Stash",
                    "value": "vueStash",
                    "short": "vueStash"
                },
                {
                    "name": "Vuex",
                    "value": "vuex",
                    "short": "vuex"
                }
            ]
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?"
        },
        "lintConfig": {
            "when": "lint",
            "type": "list",
            "message": "Pick an ESLint preset: ",
            "choices": [
                {
                    "name": "Barrage (official Barrage config)",
                    "value": "barrage",
                    "short": "barrage"
                }
            ]
        },
        "unit": {
            "type": "confirm",
            "message": "Set up unit tests"
        },
        "runner": {
            "when": "unit",
            "type": "list",
            "message": "Pick a test runner",
            "choices": [
                {
                    "name": "Jest",
                    "value": "jest",
                    "short": "jest"
                },
                {
                    "name": "Karma and Mocha",
                    "value": "karma",
                    "short": "karma"
                },
                {
                    "name": "none (configure it yourself)",
                    "value": "noTest",
                    "short": "noTest"
                }
            ]
        },
        "e2e": {
            "type": "confirm",
            "message": "Setup e2e tests with Nightwatch?"
        }
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint",
        "config/test.env.js": "unit || e2e",
        "build/webpack.test.conf.js": "e2e || (unit && runner === 'karma')",
        "test/unit/**/*": "unit",
        "test/unit/index.js": "unit && runner === 'karma'",
        "test/unit/jest.conf.js": "unit && runner === 'jest'",
        "test/unit/karma.conf.js": "unit && runner === 'karma'",
        "test/unit/specs/index.js": "unit && runner === 'karma'",
        "test/unit/setup.js": "unit && runner === 'jest'",
        "test/e2e/**/*": "e2e",
        "src/router/**/*": "router"
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
