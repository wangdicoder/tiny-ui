module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/components/'],
  verbose: true,
  setupFilesAfterSetup: ['<rootDir>/test-setup.js'],
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/style/**',
    '!components/**/*.d.ts',
    '!components/**/index.md',
    '!components/**/demo/**',
    '!components/_utils/**',
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }],
  },
};
