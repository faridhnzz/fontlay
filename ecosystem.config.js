module.exports = {
  apps: [
    {
      name: 'fontlay-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      instances: 2,
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
