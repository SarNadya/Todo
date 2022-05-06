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
    return initialValue || [];
  });

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    const initialCount = JSON.parse(savedCount);
    return initialCount || 0;
  });

  const [activeItems, setActiveItems] = useState(() => {
    const savedActiveItems = localStorage.getItem('activeItems');
    const initialActiveItems = JSON.parse(savedActiveItems);
    return initialActiveItems || [];
  })

  const [countActive, setCountActive] = useState(() => {
    const savedCountActive = localStorage.getItem('countActive');
    const initialCountActive = JSON.parse(savedCountActive);
    return initialCountActive || 0;
  });

  const [completedItems, setCompletedItems] = useState(() => {
    const savedCompletedItems = localStorage.getItem('completedItems');
    const initialCompletedItems = JSON.parse(savedCompletedItems);
    return initialCompletedItems || [];
  })

  const [countCompleted, setCountCompleted] = useState(() => {
    const savedCountCompleted = localStorage.getItem('countCompleted');
    const initialCountCompleted = JSON.parse(savedCountCompleted);
    return initialCountCompleted || 0;
  });

  const [filteredItems, setFilteredItems] = useState(items);

  //сохранение данных в хранилище браузера
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('activeItems', JSON.stringify(activeItems));
    localStorage.setItem('countActive', JSON.stringify(countActive));
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
    localStorage.setItem('countCompleted', JSON.stringify(countCompleted));
  }, [items, count, activeItems, countActive, completedItems, countCompleted]);

  useEffect(() => {
    filterAll();
  }, [items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) { newItem.isDone = !item.isDone; } 
      return newItem;
    });

    const activeItems = newItemList.filter(item => item.isDone === false);
    const completedItems = newItemList.filter(item => item.isDone === true);

    setItems(newItemList);
    setActiveItems(activeItems);
    setCountActive(activeItems.length);
    setCompletedItems(completedItems);
    setCountCompleted(completedItems.length);
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
    setActiveItems(newItems);
    setCountActive(countActive + 1);
  };

  const deleteItem = id => {
    const newItemList = items.filter(item => item.id !== id);
    const activeItems = newItemList.filter(item => item.isDone === false);
    const completedItems = newItemList.filter(item => item.isDone === true);

    setItems(newItemList);
    setCount(count - 1);
    setActiveItems(activeItems);
    setCountActive(activeItems.length);
    setCompletedItems(completedItems);
    setCountCompleted(completedItems.length);
  };

  const filterCompleted = () => {
    setFilteredItems(completedItems);
  };

  const filterActive = () => {
    setFilteredItems(activeItems);
  };

  const filterAll = () => {
    setFilteredItems(items);
  };

  const onClickEdit = id => {
    console.log('Hi!');
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem addItem={addItem} items={items} />
      <ItemList items={filteredItems} onClickDone={onClickDone} deleteItem={deleteItem} onClickEdit={onClickEdit} />
      <Footer count={count} countActive={countActive} countCompleted={countCompleted}
        filterCompleted={filterCompleted} filterActive={filterActive} filterAll={filterAll}/>
    </div>
  );
}

export default Todo;  
