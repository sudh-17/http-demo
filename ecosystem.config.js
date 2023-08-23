module.exports = {
  apps: [
    {
      name: 'http-demo',
      exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      instances: 1, // Or a number of instances
      script: 'index.js',
      // args: 'start'
    }
  ]
}
