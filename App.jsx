import { useState } from 'react';
import './App.css';

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? 'active' : ''}`}>
      <div className="item-header" onClick={toggleShow}>{question}</div>
      {show && (
        <div className="item-body">
          <div className="item-body-content">{answer}</div>
        </div>
      )}
    </div>
  );
};

const Faq = ({ data }) => {
  return (
    <div className="faqs">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { id: 2, question: "What are the benefits of React?", answer: "React allows for building reusable UI components and provides a virtual DOM for efficient updates." },
  { id: 3, question: "What are the main concepts of React?", answer: "The main concepts of React include components, hooks, state, props, and JSX." },
  { id: 4, question: "What is the difference between React and Angular?", answer: "React is a JavaScript library for building user interfaces, while Angular is a full-fledged framework for building web applications." }
];

function App() {
  return (
    <>
    
      <Faq data={data} />
    </>
  );
}

export default App;
