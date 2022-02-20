import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

function Todo() {
  const [items, setItems] = useState([
      {
        value: 'Поработать',
        isDone: false,
        id: 1
      },
      {
        value: 'Приготовить обед',
        isDone: true,
        id: 2
      },
      {
        value: 'Выполнить тренировку',
        isDone: true,
        id: 3
      }
  ]);

  const [count, setCount] = useState(3);

  useEffect(() => {
    console.log('компонент создан');
  }, []);

  useEffect(() => {
    console.log('компонент обновлен');
  }, [count]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = {...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems(newItemList)
  };

  const addItem = value => {
      const newItems = [
          ...items,
          {
            value,
            isDone: false,
            id: count + 1
          }
      ];
      setItems(newItems);
      setCount(count + 1);
  };

  const deleteItem = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    setCount(count - 1);
  };

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem addItem={addItem} />
        <ItemList items={items} onClickDone={onClickDone} deleteItem={deleteItem}/>
        <Footer count={count}/>
      </div>
    );
}

export default Todo;
