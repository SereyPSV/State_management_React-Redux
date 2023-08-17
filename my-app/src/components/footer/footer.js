import { useSelector, useDispatch } from 'react-redux';
import { selectMessageShow, selectMessageResult } from '../../selectors';
import { CLEAR_FIELD } from '../../actions';
import styles from '../../app.module.css';

export const Footer = () => {
	const showNone = useSelector(selectMessageShow);
	const messageResult = useSelector(selectMessageResult);

	const dispatch = useDispatch();

	const onClearField = () => {
		dispatch(CLEAR_FIELD);
	};
	return (
		<>
			<button className={styles.buttonStart} onClick={onClearField}>
				Start Game!
			</button>
			<div className={styles.wonMessage} style={{ display: `${showNone}` }}>
				{messageResult}
			</div>
		</>
	);
};
