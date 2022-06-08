import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';

const Header = ({count, countActive, countCompleted, filterCompleted, filterActive, filterAll}) => (
  <Box
      sx={{
        width: 650,
        mt: '2rem',
        ml: '2rem'
      }}
    >
    <h1 className={styles.title}> Список моих дел </h1>
    <div className={styles.filterList}>
    <Button size="small" className={styles.button} key="completed" onClick={() => filterCompleted()}> Завершенные <strong>{countCompleted}</strong> </Button>
    <Button size="small" className={styles.button} key="active" onClick={() => filterActive()}> Незавершенные <strong>{countActive}</strong> </Button>
    <Button size="small" className={styles.button} key="all" onClick={() => filterAll()}>Все <strong>{count}</strong></Button>
    </div> 
  </Box>
);

Header.propTypes = {
  count: PropTypes.number.isRequired
};

export default Header;
