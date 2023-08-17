import { Input } from './player/player';
import styles from './players.module.css';
import { useSelector } from 'react-redux';
import { selectPlayer } from '../../../selectors';
import PropTypes from 'prop-types';

export const Players = () => {
	const playerN = useSelector(selectPlayer);
	return (
		<div className={styles.players}>
			<Input color={'red'}>Player 1</Input>

			<div
				className={`${styles.nextMove} ${
					playerN === 'X' ? styles.red : styles.green
				}`}
			>
				<p>Next</p>
				<p>{playerN}</p>
			</div>
			<Input color={'green'}>Player 2</Input>
		</div>
	);
};

Players.propTypes = {
	playerN: PropTypes.string,
};
