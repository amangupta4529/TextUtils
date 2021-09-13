import React,{useState} from "react";
export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("handleUpClick called");
        setText(text.toUpperCase());
        props.alert("Converted To Uppercase","success");
    }
    const handleLowerClick=()=>{
      console.log("handleUpClick called");
      setText(text.toLowerCase());
      props.alert("Converted To Lowercase","success");
    }
    const handleOnChhange=(event)=>{
        console.log("OnChhange called");
        setText(event.target.value);
        let words=text.split(" ").length;
        
        setWords(words);
    }
    const clear=()=>{
      setText("");
      setWords(0);
      props.alert("Text Cleraed","success");

    }
    const [text,setText]=useState('Enter text here');
    const [words,setWords]=useState(text.split(" ").length);
    
  return (
    <>
    <div className="container" >
      <div className="mb-3">
        <h1 style={{
        color:props.mode==='black'?'white':'black'
        }}>{props.heading}</h1>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChhange}
          style={{backgroundColor:props.mode==='black'?'grey':'white',
                  color:props.mode==='black'?'white':'black',
                
        }}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLowerClick}>convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={clear}>Clear Text</button>

    </div>
    <div className="container my-3" style={{
                  color:props.mode==='black'?'white':'black',

        }}>
       <h1 >your text summary</h1>
      <p>{words} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something To Preview it here"}</p>
    </div>
    </>
  );
}
