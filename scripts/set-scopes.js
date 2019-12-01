const { exec } = require('child_process');
const actions = require('@actions/core');

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

actions.exportVariable('FIRST_NAME', 'lol');