module.exports = {
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };