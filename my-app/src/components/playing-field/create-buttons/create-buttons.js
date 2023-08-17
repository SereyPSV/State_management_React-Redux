import { Fragment } from 'react';
import styles from './create-buttons.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectButtonsField, selectButtonsWon, selectPlayer } from '../../../selectors';
import { playerTurn, playerWon, nobodyWon } from '../../../actions';
import { TicTacToeLogic } from '../../../utils';

export const CreateButtons = () => {
	const buttons = useSelector(selectButtonsField);
	const buttonsWon = useSelector(selectButtonsWon);
	const playerN = useSelector(selectPlayer);

	const dispatch = useDispatch();
	const onPlayerTurn = (item) => {
		if (item.target.textContent === '') {
			const gameResult = TicTacToeLogic({ ...buttons, [item.target.id]: playerN });
			if (
				!Object.values({ ...buttons, [item.target.id]: playerN }).some(
					(i) => i === '',
				)
			) {
				dispatch(nobodyWon(item.target.id));
			}
			if (gameResult) {
				dispatch(playerWon([item.target.id, gameResult, playerN]));
			} else {
				dispatch(playerTurn([item.target.id, playerN]));
			}
		}
	};

	return (
		<Fragment>
			{Object.keys(buttons).map((item) => (
				<div
					className={`${styles.button} ${buttonsWon[item]}`}
					style={buttons[item] === 'X' ? { color: 'red' } : { color: 'green' }}
					key={item}
					id={item}
					onClick={onPlayerTurn}
				>
					{buttons[item]}
				</div>
			))}
		</Fragment>
	);
};
