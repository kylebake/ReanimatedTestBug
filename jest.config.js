// jest.config.js

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    'android.js',
    'ios.js',
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/react-native/jest/setup.js',
    '<rootDir>/setup-react-native.js',
    '<rootDir>/setup-tests.js',
  ],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native-reanimated|@react-native|expo(nent)?|@expo(nent)?/.*)',
  ],
};
