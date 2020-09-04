module.exports = {
  apps: [
    {
      name: "meetin-api",
      script: "./build/server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
