import React from 'react';
import styles from './Layout.module.scss';
import SideMenu from './SideMenu/SideMenu';
import Header from './Header/Header';

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.sideBar}>
				<SideMenu />
			</div>

			<div className={styles.main}>
				<div className={styles.mainGradientBg}>
					<Header />
					{children}
				</div>
			</div>

			<div className={`${styles.footer} footer`}>
				<div>
					<a href='https://www.sealed.ai'>
						<img src='https://www.sealed.ai/wp-content/uploads/2019/05/logo_pink.png' alt='Sealed' />
					</a>
				</div>

				<div className={styles.links}>
					<a href='https://www.sealed.ai/eula/' target='_blank' rel='nofollow'>
						User agreement
					</a>
					<a href='https://www.sealed.ai/privacy/' target='_blank' rel='nofollow'>
						Privacy Policy
					</a>
				</div>

				<div className={styles.downloadLinks}>
					<a href='https://zoom.us/' className='zoom' target='_blank' rel='nofollow'>
						<img src='https://www.sealed.ai/wp-content/themes/sealed/assets/images/zoom.png' alt='Zoom' title='Zoom' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Layout;
