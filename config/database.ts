export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'my-strapi-db-web.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'ivettejorquera'),
      password: env('DATABASE_PASSWORD', 'Ypofg62022+'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
