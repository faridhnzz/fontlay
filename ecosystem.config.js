module.exports = {
  apps: [
    {
      name: 'fontlay-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 2,
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
