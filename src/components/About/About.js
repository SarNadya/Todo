import React, {Component} from 'react';
import styles from './About.module.css';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import { Octokit } from'@octokit/rest';

const octokit = new Octokit();

class About extends Component {
	state = {
		isLoading: true,
		repoList: [],
		requestError: false,
		error: {}
	}

	componentDidMount() {
		octokit.rest.repos.listForUser({
			username: 'SarNadya'
		})
		.then(({ data }) => (
			this.setState({
				repoList: data,
				isLoading: false,
				avatarUrl: data[0].owner.avatar_url,
				login: data[0].owner.login
			})
		))
		.catch(err => (
			this.setState({
				requestError: true,
				isLoading: false,
				error: err
			})
		));

		octokit.rest.users.getByUsername({
			username: 'SarNadya'
		})
		.then(({ data }) => (
			this.setState({
				isLoading: false,
				name: data.name,
				bio: data.bio
			})
		))
		.catch(err => (
			this.setState({
				requestError: true,
				isLoading: false,
				error: err
			})
		));
	}

	render() {
		const { isLoading, repoList, requestError, error, avatarUrl, login, name, bio } = this.state;

		return (
			<CardContent className={styles.wrap}>
				{requestError && (
					<div className={styles.err}>
						<div>{error.name}</div>
						<div>{error.message}</div>
					</div>
				)}

				{!requestError && (
					<div>
						<Avatar alt={repoList.username} src={avatarUrl} sx={{ width: 65, height: 65 }}/>
						<h5> {name} ({login})</h5>
						<div> {bio} </div>
					</div>
				)}

				<h2 className={styles.prelouder}>
					{isLoading && <CircularProgress disableShrink/>}
					{!requestError && 'Мои репозитории:'}
				</h2>
				{!requestError && <ul className={styles.list}>
					{repoList.map(repo => (
						<li key={repo.id}>
							<a href={repo.html_url} className={styles.link}>
								{repo.name}
							</a>
						</li>
					))}
				</ul>}
			</CardContent>
		);
	}
}

export default About;
