
const config = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'unicorn',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || '3306',
  },
};

export default config;
