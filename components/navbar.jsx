import Link from 'next/link'
import styles from './navbar.module.scss'
import {Container, Navbar} from 'react-bootstrap'

import useWindowSize from '../hooks/useWindowSize'
import getBreackpoint from '../lib/getBreackpoint'
import getMinValueObj from '../lib/getMinValueObj'

import Help from '../public/nav/help-icon.svg';
import Cart from '../public/nav/cart-icon.svg';
import Login from '../public/nav/login-icon.svg';
import Search from '../public/nav/search-icon.svg';


	const occasion_date = [
		{ name: "Рождество", date: new Date(2020, 0, 7) },
		{ name: "День всех влюблённых", date: new Date(2020, 1, 14) },
		{ name: "Международный Женский день", date: new Date(2020, 2, 8) },
		{ name: "День победы", date: new Date(2020, 4, 9) },
		{ name: "Последний звонок", date: new Date(2020, 4, 25) },
		{ name: "День знаний", date: new Date(2020, 8, 1) },
		{ name: "День учителя", date: new Date(2020, 9, 5) },
		{ name: "День матери", date: new Date(2020, 10, 24) },
		{ name: "Новый год", date: new Date(2020, 11, 31) }
	];

	let today = new Date();

	const result = occasion_date.filter(function (occasion) {
		return occasion.date >= today;
	});

	const soon_occasion = getMinValueObj(result, "date");
	const diffTime = Math.abs(soon_occasion.date - today);


export default function Component() {


	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	const width = useWindowSize();
	const point = getBreackpoint(width);

	return (

		<Container fluid={point}>
			<Navbar className={styles.navContainer}>
				<a className={styles.test}><img className={styles.logo} src="logo.png"/></a>
				<div className={styles.menuContainer}>
					<div className={styles.menuContainerTabs}>
						{diffDays < 31 &&
							<div className={styles.menuTab}>
								<Link href="/">
									<a className = {styles.menuTabButton}>{soon_occasion.name}</a>
								</Link>
							</div>
						}
						<div className={styles.menuTab}>
							<Link href="/">
								<a className = {styles.menuTabButton}>День Рождения</a>
							</Link>
						</div>
						<div className={styles.menuTab}>
							<Link href="/">
								<a className = {styles.menuTabButton}>Праздники</a>
							</Link>
						</div>
						<div className={styles.menuTab}>
							<Link href="/">
								<a className = {styles.menuTabButton}>Цветы</a>
							</Link>
						</div>
						<div className={styles.menuTab}>
							<Link href="/">
								<a className = {styles.menuTabButton}>Подарки</a>
							</Link>
						</div>
					</div>
					<div className={styles.menuContainerLinks}>
						<div className={styles.menuTab}>
							<button className={styles.btnIcon}>
								<span className={styles.helpIcon}>
									<Help />
									<span className={styles.iconLabel}>Помощь</span>
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className={styles.utilityLinks}>
					<button className={styles.btnIcon}>
						<span>
							<Search />
							<span className={styles.iconLabel}>Поиск</span>
						</span>
					</button>
				</div>
				<div className={styles.utilityLinks}>
					<button className={styles.btnIcon}>
						<span>
							<Login />
							<span className={styles.iconLabel}>Профиль</span>
						</span>
					</button>
				</div>
				<div className={styles.utilityLinks}>
					<button className={styles.btnIcon}>
						<span>
							<Cart />
							<span className={styles.iconLabel}>Корзина</span>
						</span>
					</button>
				</div>
			</Navbar>
		</Container>
	)
}

// export default Navbar;