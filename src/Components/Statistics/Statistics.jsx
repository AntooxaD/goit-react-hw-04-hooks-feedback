import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={style.statisticsList}>
            <li className={style.statisticItem}>Good: {good}</li>
            <li className={style.statisticItem}>Neutral: {neutral}</li>
            <li className={style.statisticItem}>Bad: {bad}</li>
            <li className={style.statisticItem}>Total: {total}</li>
            <li className={style.statisticItem}>
                Positive Percentage: {positivePercentage} %
            </li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
