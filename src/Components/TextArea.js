


import React,{useState} from 'react';

import   './Components.css';    



export default function Textarea(){

    const  handleOnchange = (e)=>{

      settext(e.target.value)
        
            
        }

    const convertUpperCase=(e)=>{

settext_output(text.toUpperCase())


    }
function removeSpace(){


    settext_output(text.trim())
}




    const [text,settext]=useState("Enter text here");  //if we use useState we cant cahnge text varailbe directly we use settext function       
const [outputtext,settext_output]=useState(" ");
    //ex--settext("text");    
    



return (
<>

    <h1>Text utils</h1>  
<textarea type="text"  id="inputarea" value={text}  onChange={handleOnchange}></textarea>
<textarea type="text"  id="inputarea2"  value={outputtext}></textarea>

<div id="buttonbox">
<button onClick={removeSpace}>RemoveSpace</button>
<button onClick={convertUpperCase}>Convert Upper case</button>
<button>Extract all alphabets</button>
<button>Extract all numbers</button>
</div>

</>











);



}