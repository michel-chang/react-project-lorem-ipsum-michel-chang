import React, {useState} from 'react';
import data from './data';

function App() {
  const[count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
  e.preventDefault();
  let amount = parseInt(count);
  if(count <=0){
    amount =1;   
  }
  if(count >8) {
    amount = 8;
  }  
  setText(data.slice(0,amount));    
  };

  return (
    <section className="section-center">
      <h3>/Generate your Lorem Ipsum/</h3>
      <br />
    
      <form className="lorem-from" onSubmit={handleSubmit}>
        <label htmlform="amount">
          Paragraphs:
        </label>
        <input 
        type="number" 
        name="amount" 
        id="amount" 
        value={count}
        onChange={(e) => setCount(e.target.value)}
        />
      <button type="submit"className="btn" >Generate</button>
      <h5>(max, 8 paragraphs)</h5>
      </form>
      <br/>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>;
        })}
      </article>
      <footer>
        <h6>Created by Michel Chang</h6>
        </footer>
    </section>
  
  );
}

export default App;
