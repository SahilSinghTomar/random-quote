import { useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const newQuote = response.data[0];
      setQuote(newQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuoteToList = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ron Swanson Quotes</h1>
        <button onClick={fetchRandomQuote}>Get Random Quote</button>
        {quote && <QuoteCard quote={quote} onSave={saveQuoteToList} />}
        <QuoteList quotes={savedQuotes} />
      </header>
    </div>
  );
}

export default App;
