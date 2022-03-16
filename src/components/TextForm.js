import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Upper case" , "success")
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower case" , "success")
  };

  const handleCleartext = (event)=>{
    let newText = " "
    setText(newText)
    props.showAlert("Clear Text" , "success")
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
   
  };


  const [Text, setText] = useState("Enter test here");
  return (
    <>
      <div className ='container'style={{backgroundColor : props.mode==='light'?'white':'grey'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={HandleOnChange}
            style={{backgroundColor : props.mode==='light'?'white':'grey'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCleartext}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{backgroundColor : props.mode==='light'?'white':'grey'}}>
        <br/>
        <h1>Your text Summery</h1>
        <p>Your Text item has <strong> {Text.length} </strong> characters and <strong> {Text.split(" ").filter((ele)=>{return ele.length!==0}).length}</strong> Words</p>
        <p>Time required for reading is <strong>{Text.split(" ").length * 0.008}</strong> Minutes</p>
        <h2>Preview</h2>
        <p>{Text.length>0 ? Text : "Enter Your text to preview"}</p>

      </div>
    </>
  );

}

// {Text.split(" ").length<=1?0:(Text.split(" ").length)-1}
