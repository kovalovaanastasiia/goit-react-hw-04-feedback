import PropTypes from 'prop-types';

export const Statistics = ({children, bad, good, neutral, total, positivePercentage}) => {

    return (
      <>
        <h2 className="title">Statistics</h2>
        {total === 0 ? (<>{children}</>) : (
              <ul className="statistics-list">
                <li className="statistics-item">Good: {good}</li>
                <li className="statistics-item">Neutral: {neutral}</li>
                <li className="statistics-item">Bad: {bad}</li>
                <li className="statistics-item">Total: {total}</li>
                <li className="statistics-item">Positive feedback: {Math.round(positivePercentage)}%</li>
              </ul>
        )}
      </>
    )
}

Statistics.propTypes = {
  children: PropTypes.object,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
}
