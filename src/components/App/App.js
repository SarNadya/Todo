import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const setActive = ({isActive}) => {
	const linkStyles = [styles.link];
	if (isActive) linkStyles.push(styles.active_link);
	return linkStyles.join(' ');
};

class App extends Component {
	render() {
		return (
			<Router>
				<div className={styles.sidebar}>
					<div className={styles.menu}>
					<NavLink
							to='/'
							exact = 'true'
							className={setActive}
						>
							Обо мне
						</NavLink>
						<NavLink
							to='/todo'
							className={setActive}
						>
							Дела
						</NavLink>
					</div>
					<Routes className={styles.content}>
						<Route exact = 'true' path='/' element={<About/>}/>
						<Route path='/todo' element={<Todo/>}/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
