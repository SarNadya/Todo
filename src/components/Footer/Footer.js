import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import PropTypes from 'prop-types';

const buttons = [
  <Button key="all">Все</Button>,
  <Button key="active">Активные</Button>,
  <Button key="completed">Выполненные</Button>,
];

const Footer = ({count}) => (
  <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '& > *': {
          m: 1.2,
        }
      }}
    >
      <div>Дел осталось: {count} </div>
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
