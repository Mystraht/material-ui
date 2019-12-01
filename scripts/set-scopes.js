const { exec } = require('child_process');

function setEnvVariable(name, value) {
  exec('echo "::set-env name=' + name + '::' + value + '"', (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}

exec('git diff --name-only origin/master', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  const modifiedFiles = stdout.split('\n');

  modifiedFiles
    .forEach((line) => {
      if (line.match(/jsx|js/)) {
        setEnvVariable('JS_MODIFIED', 'truee');
        console.log('env var set');
      }
    });
});