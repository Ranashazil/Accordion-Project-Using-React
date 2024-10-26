import React from 'react';
import mine from './components/HeyData';
import Question from './components/Question';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-slate-400 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Accordion Concepts</h1>
        <section className="space-y-4">
          {mine.map((good) => (
            <Question key={good.id} {...good} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
