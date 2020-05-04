module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/components/'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
};
