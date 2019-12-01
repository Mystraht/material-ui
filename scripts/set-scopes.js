const { exec } = require('child_process');

const scopes = [{
  regexp: /(\.jsx)|(\.js)$/,
  envVariable: 'JS_MODIFIED',
}, {
  regexp: /\.php$/,
  envVariable: 'PHP_MODIFIED',
}];

exec('git diff --name-only origin/master', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  const modifiedFiles = stdout.split('\n');

  modifiedFiles
    .forEach((line) => {
      scopes.forEach(scope => {
        if (line.match(scope.regexp)) {
          setEnvVariable(scope.envVariable, 'true');
        }
      })
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