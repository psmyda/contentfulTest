import React from 'react';
import './App.css';
import QuestionsList from './components/QuestionsList';

function App() {
  return (
    <div className="App">
        <div className="container">
          <QuestionsList items={[{id: "1", title: "Test", text: "Test dummy text 1", internalTitle: "int"},
              {id: "2", title: "Test2", text: "Test dummy text 2", internalTitle: "int2"}]} />
        </div>
    </div>
  );
}

export default App;
