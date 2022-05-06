import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Footer = ({count, countActive, countCompleted, filterCompleted, filterActive, filterAll}) => (
  <Box
      sx={{
        width: 450,
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'stretch'
      }}
    >
    <Button key="completed" onClick={() => filterCompleted()}> Завершенные {countCompleted} </Button>
    <Button key="active" onClick={() => filterActive()}> Незавершенные {countActive} </Button>
    <Button key="all" onClick={() => filterAll()}>Все {count}</Button>
  </Box>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
