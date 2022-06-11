import React, {Component} from 'react';
import styles from './About.module.css';
import fork from './img/fork.jpg';
import star from './img/star.jpg';
import vk_logo from './img/vk_logo.jpg';
import f_logo from './img/f_logo.jpg';
import github_logo from './img/github_logo.jpg';
import err_img from './img/err_img.jpg';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';

import { Octokit } from'@octokit/rest';
import { Link } from '@material-ui/core';

const octokit = new Octokit();

class About extends Component {
	state = {
		isLoading: true,
		repoList: [],
		username: 'SarNadya',
		requestError: false,
		error: {}
	}

	componentDidMount() {
		octokit.rest.repos.listForUser({
			username: this.state.username
		})
		.then(({ data }) => (
			this.setState({
				repoList: data,
				isLoading: false,
				requestError: false
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
			username: this.state.username
		})
		.then(({ data }) => (
			this.setState({
				isLoading: false,
				requestError: false,
				name: data.name,
				bio: data.bio,
				avatarUrl: data.avatar_url
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
		const { isLoading, repoList, requestError, error, avatarUrl, name, bio } = this.state;

		return (
			<div className={styles.wrap}>
				{requestError && (
					<div className={styles.err}>
						<div>{error.name}</div>
						<div>{error.message}</div>
					</div>
				)}

				{!requestError && (
					<div className={styles.info}>
						<div className={styles.avatar}>
							<Avatar
								variant='square'
								alt={repoList.username}
								src={avatarUrl}
								sx={{ width: 144, height: 176, borderRadius: 3 }}
							/>
						</div>
						<p className={styles.contacts}>
							<h5 className={styles.name}> {name} </h5>
							<div className={styles.bio}> {bio} </div>
							<Link href='mailto: lutik.ne@gmail.com' color='inherit' className={styles.contact_link} title='Написать мне на почту'>
								<AlternateEmailIcon fontSize='small'color='disabled' sx={{pr: 0.5}} />
								lutik.ne@gmail.com
							</Link>
							<Link href='https://web.telegram.org/' color='inherit' className={styles.contact_link} title='Написать мне в Телеграм'>
								<TelegramIcon fontSize='small'color='disabled' sx={{pr: 0.5}} />
								+7 960 248 95 20
							</Link>
						</p>
						<div className={styles.socialNetwork}>
							<Link href='https://github.com/SarNadya' color='inherit' title='Мой GitHub'>
								<img src={github_logo} alt='github_logo' className={styles.logo}/>
							</Link>
							<Link href='https://vk.com/sarnadya' color='inherit' title='Я в VK'>
								<img src={vk_logo} alt='vk_logo' className={styles.logo}/>
							</Link>
							<Link href='https://www.facebook.com' color='inherit' title='Я в facebook'>
								<img src={f_logo} alt='facebook_logo' className={styles.logo}/>
							</Link>
						</div>
					</div>
				)}

				<div className={styles.projects}>
					<h2 className={styles.title}>
						Мои проекты:
					</h2>
						{isLoading ? <CircularProgress disableShrink/> :
							<ul className={styles.projects_list}>
								<li> <a href='https://sarnadya.github.io/Project.Axion/' className={styles.project_link}> Верстка сайта по макету в Figma </a></li>
								<li> <a href='https://sarnadya.github.io/JS-Game/' className={styles.project_link}> Карточная игра "Найди баг" </a></li>
								<li> <a href='https://github.com/SarNadya/todo' className={styles.project_link}> Приложение на React </a></li>
							</ul>
						}
				</div>

				<div className={styles.projects}>
					<h2 className={styles.title}>
						Репозитории на github.com
					</h2>
						{isLoading ? <CircularProgress disableShrink/> : requestError ?
							<div className={styles.error_wrap}>
								<img src={err_img} alt='Error_image' className={styles.error_img}/>
								<h3> Что-то пошло не так... </h3>
								<p> Попробуйте <a href='.' className={styles.error_update}> загрузить </a> еще раз </p>
							</div> : repoList.length === 0 ?
								<div className={styles.error_wrap}>
									<img src={err_img} alt='Error_image' className={styles.error_img}/>
									<h3> Репозитории отсутствуют </h3>
									<p> Добавьте как минимум один репозиторий на <a href='https://github.com/' className={styles.error_update}> github.com </a> </p>
								</div> :
								<ul className={styles.repolist}>
									{repoList.map(repo => (
										<div className={styles.repo} key={repo.id}>
											<a href={repo.html_url} className={styles.link}>
												{repo.name}
											</a>
											<div className={styles.repo_info}>
											<div className={styles[`repo_info__${repo.language}-icon`.toLowerCase()]}></div>
												<p className={styles.elem}>
													{repo.language}
												</p>
												<p className={styles.elem}>
													<img src={star} alt='star' className={styles.star}/>
												</p>
												<p className={styles.elem}>
													{repo.stargazers_count}
												</p>
												<p>
													<img src={fork} alt='fork' className={styles.fork_img}/>
												</p>
												<p className={styles.elem}>
													{repo.forks}
												</p>
												<p className={styles.elem}>
													<span> Updated on </span>
													{new Date(repo.updated_at).toLocaleString('eng', {day: 'numeric', month: 'long', year: 'numeric'})}
												</p>
											</div>
										</div>
									))}
								</ul>}
				</div>
			</div>
		);
	}
}

export default About;
