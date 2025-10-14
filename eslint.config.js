const { defineConfig, globalIgnores } = require('eslint/config');
const globals = require('globals');
const { fixupConfigRules } = require('@eslint/compat');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const nodePlugin = require('eslint-plugin-n');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});
const resolveConfig = require('./webpack/config.js').RESOLVE;

module.exports = defineConfig([
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                _: false,
                ajaxUrl: false,
                Backbone: false,
                Cesium: false,
                Channel: false,
                ClipperLib: false,
                d3: false,
                define: false,
                jQuery: false,
                jsts: false,
                MobileDetect: false,
                moment: false,
                Oskari: false,
                Proj4js: false,
                turf: false,
                __webpack_public_path__: false,
                CESIUM_BASE_URL: false,
                describe: false,
                it: false,
                afterAll: false,
                expect: false,
                test: false,
                jest: false
            },

            ecmaVersion: 2020,
            sourceType: 'module',
            parserOptions: {}
        },

        plugins: { n: nodePlugin },
        extends: fixupConfigRules(compat.extends(
            'eslint:recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:react/recommended'
        )),

        rules: {
            'n/no-callback-literal': 'error',
            'no-restricted-properties': ['error', {
                property: 'getRequestBuilder',
                message: 'Please use Oskari.requestBuilder() instead.'
            }, {
                property: 'getEventBuilder',
                message: 'Please use Oskari.eventBuilder() instead.'
            }],

            'indent': ['error', 4],
            'semi': ['error', 'always'],
            'no-template-curly-in-string': 0,
            'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

            'quotes': ['error', 'single', {
                allowTemplateLiterals: true,
                avoidEscape: true
            }],

            'no-unused-vars': ['error', {
                caughtErrors: 'none',
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false
            }],
            'no-fallthrough': 'off',
            'import/no-default-export': 'error',
            'quote-props': ['warn', 'consistent-as-needed'],
            'lines-between-class-members': ['warn', 'always'],

            'prefer-const': ['warn', {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }],

            'no-prototype-builtins': 'warn',

            'object-curly-newline': ['error', {
                consistent: true
            }],

            'dot-notation': 'warn',

            'brace-style': ['warn', '1tbs', {
                allowSingleLine: true
            }],

            'camelcase': ['warn', {
                properties: 'never'
            }],

            'eqeqeq': ['warn', 'always', {
                null: 'ignore'
            }],

            'handle-callback-err': ['warn', '^(err|error)$'],

            'new-cap': ['warn', {
                newIsCap: true,
                capIsNew: false
            }],

            'no-unmodified-loop-condition': 'warn',

            'no-unneeded-ternary': ['warn', {
                defaultAssignment: false
            }],

            'one-var': ['warn', {
                initialized: 'never'
            }],

            'no-labels': ['warn', {
                allowLoop: false,
                allowSwitch: false
            }],
            'no-empty': ['error', {
                allowEmptyCatch: true
            }],
            'comma-dangle': ['error', {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }]
        },
        settings: {
            'import/resolver': {
                webpack: {
                    config: {
                        resolve: resolveConfig
                    }
                }
            },

            'react': {
                version: 'detect'
            }
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            'import/no-unresolved': ['error', {
                ignore: ['^olcs\\/css\\/olcs\\.css$']
            }]
        }
    },
    {
        files: [
            '**/*.cjs',
            '**/*.config.js',
            '**/*.config.cjs',
            '**/.*rc.js',
            'scripts/**/*.{js,cjs}',
            'tools/**/*.{js,cjs}',
            'webpack/**/*.{js,cjs}'
        ],
        languageOptions: {
            sourceType: 'commonjs',
            globals: { ...globals.node, ...globals.commonjs }
        }
    },
    {
        files: [
            'webpack/oskari-core.js',
            'webpack/polyfill.js'
        ],
        languageOptions: {
            sourceType: 'module'
        }
    },
    globalIgnores([
        'typings/**/*',
        'tools/**/*',
        'tests/**/*',
        'src/**/*',
        'resources/**/*',
        'packages/**/*',
        'node_modules/**/*',
        'locale/**/*',
        'libraries/**/*',
        'dist/**/*',
        'applications/**/*',
        'api/**/*',
        'bundles/**/locale/*.js',
        '**/*.min.js'
    ])
]);
