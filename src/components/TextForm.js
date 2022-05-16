import React,{useState} from 'react'

export default function TextForm(props) {
    const handleChangeClick=()=>{
      let newText=text.toUpperCase();
      if(text==newText)
      {
        let ntext=text.toLowerCase();
        setText(ntext);
        // props.showAlert("Converted To Uppercase","success");
      }
      else
      setText(newText);
      // props.showAlert("Converted To Lowercase","success");
    }
    const handleClearClick=()=>{
      setText('');
    }
    
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
    }
    
    const removeSpace=()=>{
      var newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    
    const handleSpeakClick=()=>{
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text to speech activated","success");
    }
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
      <>
      <div className="container" style={{color: props.mode=='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor:props.mode=='light'?'white':'grey',color: props.mode=='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-dark mx-2" onClick={handleChangeClick}>A/a</button>
    <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-dark mx-2" onClick={handleSpeakClick}>Speak</button>
    <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-dark mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.length>0?text.trim().split(" ").length:0} words , {text.length} characters</p>
        <p>{text==""?0:text.split(" ").length*0.08} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
      </div>
      </>
  )
}