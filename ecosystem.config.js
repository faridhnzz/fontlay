module.exports = {
  apps: [
    {
      name: "fontlay-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env_production: {
        NODE_ENV: "production",
        DOMAIN: "https://fontlay.com",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
