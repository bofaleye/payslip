/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ['node_modules/(?!@ionic/react|@ionic)'],
};

module.exports = config;

