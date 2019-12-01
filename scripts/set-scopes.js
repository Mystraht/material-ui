const { exec } = require('child_process');
const actions = require('@actions/core');

actions.exportVariable('FIRST_NAME', 'Val');

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
//
// exec('::set-env name=FIRST_NAME::TEST', (error, stdout) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
// });