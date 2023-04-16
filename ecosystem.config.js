module.exports = {
  apps: [
    {
      name: "fontlay-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
