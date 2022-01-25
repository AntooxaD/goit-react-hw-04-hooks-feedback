import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={style.feedbackList}>
            {options.map(option => (
                <li className={style.feedbackItem} key={option}>
                    <button
                        className={style.feedbackButton}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
