require('dotenv').config();

module.exports = {
  development: {
    username: 'framky',
    password: 'humanity',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  localtest: {
    username: 'framky',
    password: 'humanity',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'E_DATABASE_URL',
    dialect: 'postgres'
  }
};

