import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleChange}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}
