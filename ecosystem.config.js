module.exports = {
  apps: [
    {
      name: "server",
      script: "npm run dev",
      args: "",
      cwd: "./server",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "client",
      script: "npm run start",
      args: "",
      cwd: "./client",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
