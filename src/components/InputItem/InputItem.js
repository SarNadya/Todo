import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputError: false
  };

  clickButton = () => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: ''
      });
      this.props.addItem(this.state.inputValue);
    }
    else {
      this.setState({
        inputError: true
      });
    }
  };

  render() {
    return (
      <Box className={styles.button}
        sx={{width: 295}}
      >
        <TextField fullWidth
          type="text"
          label="Добавить задачу"
          id="fullWidth"
          value={this.state.inputValue}
          error={this.state.inputError}
          onChange={event => this.setState({
            inputValue: event.target.value.toUpperCase(),
            inputError: false
          })}
        />
        <ButtonAdd
          type="submit"
          clickButton={this.clickButton}
        />
      </Box>
    );
  }
}

InputItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default InputItem;
