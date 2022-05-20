import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
// import '@fontsource/roboto/700.css';
// import '@fontsource/roboto/400.css';

const Header = ({count, countActive, countCompleted, filterCompleted, filterActive, filterAll}) => (
  <Box
      sx={{
        width: 600,
        mt: '2rem',
        ml: '2rem',
        display: 'flex',
        justifyContent: 'spaceEvenly',
        alignItems: 'flexEnd',
        justifyContent: 'spaceAround'
      }}
    >
    <h1 className={styles.title}> Список моих дел </h1>
    <div>
    <Button key="completed" onClick={() => filterCompleted()}> Завершенные {countCompleted} </Button>
    <Button key="active" onClick={() => filterActive()}> Незавершенные {countActive} </Button>
    <Button key="all" onClick={() => filterAll()}>Все {count}</Button>
    </div>
  </Box>
);

Header.propTypes = {
  count: PropTypes.number.isRequired
};

export default Header;
