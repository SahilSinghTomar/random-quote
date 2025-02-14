import './QuoteCard.css';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default QuoteCard;
