import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const setActive = ({isActive}) => isActive? "active_link" : '';

class App extends Component {
	render() {
		return (
			<Router>
				<div className={styles.sidebar}>
					<nav className={styles.menu}>
						<NavLink
							to='/'
							exact = 'true'
							className={styles.link}
							// activeClassName={styles.active_link}
						>
							Дела
						</NavLink>
						<NavLink
							to='/about'
							className={styles.link}
							// activeClassName={styles.active_link}
						>
							Обо мне
						</NavLink>
					</nav>
					<Routes className={styles.content}>
						<Route exact = 'true' path='/' element={<Todo/>}/>
						<Route path='/about' element={<About/>}/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
