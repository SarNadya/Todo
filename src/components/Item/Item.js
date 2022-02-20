import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxLabel from '../CheckboxLabel/CheckboxLabel';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const {value, isDone, onClickDone, id, deleteItem} = this.props;

    return (
      <div className={styles.list} >
        <CheckboxLabel
          isDone={isDone}
          onClickDone={onClickDone}
          id={id}
        />
        <span onClick={() => onClickDone(id)} className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
          {value}
        </span>
        <ButtonDelete deleteItem={deleteItem} id={id}/>
      </div>
    );
  }
}

Item.defaultProps = {
  value: 'нет задачи',
  id: 0,
  isDone: false
};

Item.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired

};

export default Item;
