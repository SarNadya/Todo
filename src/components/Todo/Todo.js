import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

function Todo() {
  //извлечение сохраненных значений из хранилища браузера и использование по умолчанию,
  //чтобы при перезагрузке страницы состояние приложения не сбрасывалось
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('items');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  const [count, setCount] = useState(0);

  const [countActive, setCountActive] = useState(0);

  const [countCompleted, setCountCompleted] = useState(0);

  //сохранение данных в хранилище браузера
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = {...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
          if (newItem.isDone === true) {
            setCountCompleted(countCompleted + 1);
            setCountActive(countActive - 1);
          } else if (newItem.isDone === false) {
            setCountCompleted(countCompleted - 1);
            setCountActive(countActive + 1);
          }
      }

      return newItem;
    });

    setItems(newItemList);
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
      setCountActive(countActive + 1);
  };

  const deleteItem = id => {
    const newItemList = items.filter(item => item.id !== id);
    
    setCount(count - 1);
    // if (item.isDone === true) {
    //   setCountCompleted(countCompleted - 1);
    // };
    
    setCountActive(countActive - 1);
    setItems(newItemList);
  };

  const filterCompleted = isDone => {
    const completedItems = items.filter(item => item.isDone === true);
    setItems(completedItems);
  }

  const filterActive = isDone => {
    const activeItems = items.filter(item => item.isDone === false);
    setItems(activeItems);
  }

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem addItem={addItem} items={items}/>
        <ItemList items={items} onClickDone={onClickDone} deleteItem={deleteItem}/>
        <Footer count={count} countActive={countActive} countCompleted={countCompleted}
          filterCompleted={filterCompleted} filterActive={filterActive}/>
      </div>
    );
}

export default Todo;
