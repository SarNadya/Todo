import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxLabel = ({id, onClickDone, isDone}) => {
  return (
    <div onClick={() => onClickDone(id)}>
      <Checkbox {...label} icon={<RadioButtonUncheckedRoundedIcon />} checkedIcon={<CheckCircleRoundedIcon/>}
        checked={isDone}
      />
    </div>
  );
}

export default CheckboxLabel;
