module.exports = {
  preset: 'react-native',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/',
  ],
  testMatch: [
    '**/tests/**/*.test.js',
  ],
  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    'styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.native.cjs.js',
  },
  transformIgnorePatterns: [],
};
