import React, { useState } from 'react';


export default function Textfrom(props) {
  const UpperCase = () => {
    // console.log("Uppercase is clicked");
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showalart(' The UpperCase Is Activated... ','success');
  }

  const Lowercase = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showalart(' The LowerCase Is Activated... ','success');
  }

  const OnClickClear = () => {
    setText("");
    props.showalart(' You Have Entered The Clear Button...','success');
  }

  const OnClickSpeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showalart(' Voice Transletor Is Activated...','success');
  }

  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text="new text is that " this is wrong 
  // setText("this is new text")  this is right
  return (
    <>
      <div style={props.mode}>

        <div className="mb-3">
          <h2 className="my-3">{props.heading}</h2>
          <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} placeholder='Enter the text' rows="10" style={props.mode}></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={UpperCase}>{props.btn + 'Uppercase'}</div>

        <div className="btn btn-primary mx-2" onClick={Lowercase}>{props.btn + 'Lowercase'}</div>

        <div className="btn btn-primary mx-2" onClick={OnClickClear}>Clear Workspace</div>

        <div className="btn btn-primary mx-2" onClick={OnClickSpeak}>Speak</div>

        {/* <button type="button" className="btn btn-dark mx-3 my-2" onClick={toggleColor}>{btnText}</button> */}

      </div>

      <div className="container my-5" style={props.mode}>
        <h2>Info About Your Text:</h2>
        <p>Words:{text.split(" ").length} , Letters: {text.length} , Commas: {text.split(",").length - 1} , Question Marks:{text.split("?").length - 1} , Dot:{text.split(".").length - 1} </p>
        <p>Approx Time to Read: {0.008 * text.split(" ").length} minutes</p>

        <h2>Preview: </h2>
        <p><em>{text.length>0?text:'Enter somthing to the workspace to preview ...'}</em></p>
      </div>
    </>
  )
}
