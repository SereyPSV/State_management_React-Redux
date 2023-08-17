import { Players } from './players/players';
import styles from './header.module.css';

export const Header = () => (
	<>
		<label className={styles.label}>Tic Tac Toe</label>
		<Players />
	</>
);
