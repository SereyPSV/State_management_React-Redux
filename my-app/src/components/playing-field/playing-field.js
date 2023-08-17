import { CreateButtons } from './create-buttons/create-buttons';
import styles from './playingField.module.css';

export const PlayingField = () => (
	<div className={styles.field}>
		<CreateButtons />
	</div>
);
