module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./test-setup.js'],
};
