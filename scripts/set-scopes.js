const { exec } = require('child_process');

exec('git diff --name-only origin/master', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }



  const modifiedFiles = stdout.split('\n');

  modifiedFiles
    .forEach((line) => {
      if (line.match(/jsx|js/)) {

      }
    });
});

exec('export FIRST_NAME=coucou', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
});