import React, { useState, useEffect } from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';

const App = () => {
  const [words, setWords] = useState([]);
  
  useEffect(() => {
    // Simulate fetching words from an API or some other data source
    // For this example, we'll use a simple array of words.
    const wordsArray = ['Hello', 'World', 'React', 'Example'];
    
    // Update the state with the words
    setWords(wordsArray);
  }, []);

  return (
    <div className="App">
      {words.map((word, index) => (
        <p key={index}>{word}</p>
      ))}
      <HelloWorldList />
    </div>
  );
};

export default App;

// import React from 'react';
// import './App.css';
// import HelloWorldList from './HelloWorldList';

// const App = () => {
//   return (
//   <div className="App">
//   <HelloWorldList />
//   </div>
//   );
// };

// export default App;