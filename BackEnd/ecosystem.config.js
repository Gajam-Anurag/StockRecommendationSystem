module.exports = {
  apps: [
    {
      name: 'flask-server',
      script: 'stock-suggestion-server.py', // Replace with the name of your Flask application script
      interpreter: 'python', // Replace with the appropriate Python interpreter
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
