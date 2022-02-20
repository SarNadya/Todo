import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxLabel = ({id, onClickDone, isDone}) => {
  return (
    <div onClick={() => onClickDone(id)}>
      <Checkbox {...label}
        checked={isDone}
      />
    </div>
  );
}

export default CheckboxLabel;
