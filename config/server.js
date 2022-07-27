module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      proxy: true,
      url: env('MY_HEROKU_URL'),
      app: {
        keys: env.array('APP_KEYS')
      },
    }
  }
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
  }
};
