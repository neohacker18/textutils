import React,{useState} from 'react'

export default function TextForm(props) {
    const handleChangeClick=()=>{
      let newText=text.toUpperCase();
      if(text==newText)
      {
        let ntext=text.toLowerCase();
        setText(ntext);
      }
      else
      setText(newText);
    }
    const handleClearClick=()=>{
      setText('');
    }
   
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const removeSpace=()=>{
      var newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleSpeakClick=()=>{
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
      <>
      <div className="container">
          <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-dark mx-2" onClick={handleChangeClick}>A/a</button>
    <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-dark mx-2" onClick={handleSpeakClick}>Speak</button>
    <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-dark mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text==""?0:text.split(" ").length} words , {text.length} characters</p>
        <p>{text==""?0:text.split(" ").length*0.08} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>
  )
}
