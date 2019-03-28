module.exports = {
    'verbose': true,
    'setupFiles': [
        '<rootDir>/test-setup.js',
    ],
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
    ],
    'testMatch': [
        '<rootDir>/component/**/__test__/*.{js,jsx,ts,tsx}',
    ],
    'transform': {
        '^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },
};
