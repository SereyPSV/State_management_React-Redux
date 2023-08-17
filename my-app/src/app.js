import { Header, PlayingField, Footer } from './components';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app} style={{ height: `${window.screen.height}px` }}>
			<Header />
			<PlayingField />
			<Footer />
		</div>
	);
};
