module.exports = {
  testEnvironment: "node",

  moduleNameMapper: {
    "^routes/(.*)$": "<rootDir>/src/routes/$1",
    "^controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    "^models/(.*)$": "<rootDir>/src/models/$1",
    "^config/(.*)$": "<rootDir>/src/config/$1",
  },
};
