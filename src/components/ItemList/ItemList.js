import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ImageStart from '../ImageStart/ImageStart';

const ItemList = ({items, filteredItems, onClickDone, deleteItem, onClickEdit, changedItem}) => (
  <div className={styles.wrap}>
    { items.length === 0 ?
      <ImageStart/> :
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        >
      {filteredItems.map(item =>
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
