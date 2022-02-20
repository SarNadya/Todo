import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({items, onClickDone, deleteItem}) => (<ul className={styles.list}>
  {items.map(item =>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      key={item.value + item.id}
      onClickDone={onClickDone}
      deleteItem={deleteItem}
    />
  )}
</ul>);

ItemList.defaultProps = {
  items: []
};

Item.propTypes = {
  items: PropTypes.array
};

export default ItemList;
