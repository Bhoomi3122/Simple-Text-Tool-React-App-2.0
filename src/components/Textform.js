import React, { useState } from 'react'
import PropTypes from "prop-types"
export default function Textform(props) {
    const handleupperclick = (event) => {
        event.preventDefault();
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const handlelowerclick=(event)=>{
        event.preventDefault();
        let newtext = text.toLowerCase();
        setText(newtext);
    } 
    const buttonstyle={
        marginRight:'20px'
    };
    const handlecleartext=(event)=>{
        event.preventDefault();
        let newtext="";
        setText(newtext);
    }
    const capitalizetext=(event)=>{
        event.preventDefault();
        let newtext = text.replace(/\b\w/g, char=> char.toUpperCase());
        setText(newtext);
    }
    const reversetext=(event)=>{
        event.preventDefault();
        let newtext = text.split(' ').reverse().join(' ');
        setText(newtext);
    }
    // This line of code is signifying that set the current text variable value as given in brackets and whenever i will change the variable value i will do it through the setText function and then you will change the value written in setText 
    const [text,  setText] = useState('');
    const commonStyle = {
        color: props.mode === 'dark' ? 'white' : 'black'
    };
    return (
        <>
        <div className='container' style={commonStyle}>
            <h3>{props.heading}</h3>
            <form id='textform'>
                <div className="mb-3">
                    <label htmlFor="form" className="form-label"></label>
                    <textarea className="form-control" id="form" aria-describedby="emailHelp" rows={10} value={text} onChange={handleonchange} placeholder='Enter text' style={{backgroundColor:props.mode==='light'?'white':'rgb(164,164,164,1)',color: 'black'}}></textarea>
                </div>
                <button type="submit" className="btn btn-danger" onClick={handleupperclick} style={buttonstyle}>Convert to UpperCase</button>
                <button type="submit" className="btn btn-success" onClick={handlelowerclick}>Convert to LowerCase</button>
                 <button type="submit" className="btn btn-primary mx-3" onClick={capitalizetext}>Capitalize first letter</button>
                <button type="submit" className="btn btn-dark mx-3" onClick={reversetext}>Reverse text</button>
                <button type="submit" className="btn btn-warning mx-3" onClick={handlecleartext}>Clear Text</button>
            </form>
        </div>
        <div className="container my-5" style={commonStyle}>
            <h2 style={commonStyle}>Your text summary</h2>
            <p style={commonStyle}>{text.split(" ").filter((word)=> word!=="").length} words and {text.length} characters</p>
            <h3 style={commonStyle}>Preview</h3>
            <p style={commonStyle}>{text}</p>
        </div>
        </>

    )
}
Textform.propTypes = {
    heading: PropTypes.string
}