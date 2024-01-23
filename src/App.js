import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [ randomColor , setRandomColor] = useState([]);
  const [ answerPosition, setAnswerPosition ] = useState(Math.floor(Math.random() * 3))
  const [ result , setResult] = useState("")

  const generateRandomColors = (idx) =>{
    if ( answerPosition === idx){
      setResult("Correct")
    }
    else{
      setResult("Incorrect")
    }
    const newColors = [Math.random().toString(16).substring(9),Math.random().toString(16).substring(9),Math.random().toString(16).substring(9)];
    setRandomColor(newColors);
    setAnswerPosition(Math.floor(Math.random()*3))
  }

  useEffect(()=>{
    const newColors = [Math.random().toString(16).substring(9),Math.random().toString(16).substring(9),Math.random().toString(16).substring(9)];
    setRandomColor(newColors);
    setAnswerPosition(Math.floor(Math.random()*3))
  },[])
  return (
    <div className="App">
      <div className="colorSqr" style={{background: `#${randomColor[answerPosition]}`}}>
      </div>
      <div>
        {randomColor.map((button , idx)=>{
          return(<button key={idx} onClick={() => generateRandomColors(idx)}>{button}</button>)
        })}
      </div>
      <div>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
