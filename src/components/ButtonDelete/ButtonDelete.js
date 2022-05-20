import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonDelete = ({id, deleteItem}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <IconButton aria-label="delete" onClick={() => deleteItem(id)}>
        <CancelRoundedIcon/>
      </IconButton>
    </div>
  );
}

export default ButtonDelete;
