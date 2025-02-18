module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/setup-jest.ts"
  ],
  displayName: 'angular-18-nf',
  preset: 'jest-preset-angular',
  coverageDirectory: '<rootDir>/coverage/app',
  coverageReporters: ['lcov', 'text'],
  testMatch: [
    '<rootDir>/src/app/**/+(*.)+(spec).+(ts)'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*mock.ts',
    '!src/app/**/mock/**',
    '!src/app/**/models/**'
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '^@angular-architects/native-federation$': '<rootDir>/src/app/mocks/native-federation.mock.ts'
  }
};
