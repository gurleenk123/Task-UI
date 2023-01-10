import React from 'react'
import "./firstComponent.css";
import Button from '@mui/material/Button';
import cardpic from "./card.png"
export default function firstComponent() {
  return (
    <>
    <div><h1 className='pageTitle'>Save time and write with Confidence</h1></div>
    <div className="btnContainer"><Button variant="contained" color="success"   sx={{
    borderRadius:'20px',
    fontFamily: 'Open Sans',
    fontSize: "17px",
    padding:"6px 20px"
  }}>Upgrade to QuillBot Premium</Button></div>

  <div className='mainContent'>
    <div className='flexItem'><img src={cardpic} alt="logo" width="550px" ></img></div>
    <div  className='flexItem' style={{paddingRight:"60px"}}>
      <div>
        <h3 className="heading">Increase your productivity</h3>
        <p className="paragraph">Paraphrase more text at once to finish writing faster.</p>
        <hr/>
      </div>
      <div>
        <h3 className="heading">Access all modes</h3>
        <p className="paragraph">Get maximum control over how you paraphrase.</p>
        <hr/>
      </div>
      <div>
        <h3 className="heading">Scan for plagiarism</h3>
        <p className="paragraph">Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>
        <hr/>
      </div>
      <div>
        <h3 className="heading">Compare all mode outputs at once</h3>
        <p className="paragraph">Paraphrase in and compare outputs from all seven modes.</p>
        <hr/>
      </div>
    </div>
  </div>
    </>

  )
}
