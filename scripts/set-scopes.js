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

function setEnvVariable(name, value) {
  exec('echo "::set-env name=' + name + '::' + value + '"', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stdout);
  });
}

setEnvVariable('FIRST_NAME', 'lol');


// actions.exportVariable('FIRST_NAME', 'lol');