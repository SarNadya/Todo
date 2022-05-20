import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { BorderHorizontalOutlined } from '@material-ui/icons';
// import startImg from './img/startImg.svg';

const ItemList = ({items, onClickDone, deleteItem, onClickEdit, changedItem}) => (
  <div className={styles.wrap}>
    { items.length === 0 ?
      <div>
        {/* <img src={startImg} alt='startImg'> </img> */}
        <p> Вы еще не добавили ни одной задачи </p>
        <p> Сделайте это прямо сейчас!</p>
      </div> :
      // <ul className={styles.list}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        >
      {items.map(item =>
        <Grid item
          border='1px solid #CCC'
          borderRadius='41px'
          margin={1}
          height='36px'
          
        >
          <Item
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            key={item.value + item.id}
            onClickDone={onClickDone}
            deleteItem={deleteItem}
            onClickEdit={onClickEdit}
            changedItem={changedItem}
          />
        </Grid>
      )}
      </Grid>
    }
  </div>
);

ItemList.defaultProps = {
  items: []
};

Item.propTypes = {
  items: PropTypes.array
};

export default ItemList;
