module.exports = {
  apps: [
    {
      name: 'pm2-api',
      script: 'yarn rw serve api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
}
