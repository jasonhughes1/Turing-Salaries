module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/turingsalaries',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
