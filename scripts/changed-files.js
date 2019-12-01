const { exec } = require('child_process');

exec('git diff --name-only origin/master', { shell: '/usr/bin' }, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  const modifiedFiles = stdout.split('\n');
  modifiedFiles
    .forEach((line) => {
      console.log('line:', line);
    });
});

// Cache: 1m02, 25s, 1m27

// Artifact: 1m42, 42s, 2m22

// Checkout + node_modules cache = 9+19 = 28s