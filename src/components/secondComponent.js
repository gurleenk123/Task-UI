import React from 'react'
import "./secondComponent.css";
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { pink, yellow,grey } from '@mui/material/colors';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function secondComponent() {

    const firstSectionArray = [
        { checked: true, text: "125 words in the Paraphraser" },
        { checked: true, text: "Standard and Fluency modes" },
        { checked: true, text: "3 synonym options" },
        { checked: true, text: "1 Freeze word or phrase" },
        { checked: true, text: "1200 words in the Summarizer" },
        { checked: false, text: "Faster processing speed" },
        { checked: false, text: "Advanced grammar rewrites" },
        { checked: false, text: "Compare Modes (Desktop only)" },
        { checked: false, text: "Plagiarism Checker*" },
        { checked: false, text: "Tone detection" }
    ]


    return (
        <>
            <div className='Container'>

                <div className='innerContainer'>
                    <p className='free'> Free </p>
                    <Button variant="contained" color="success" sx={{
                        borderRadius: '20px',
                        fontFamily: 'Open Sans',
                        fontSize: "17px",
                        padding: "6px 70px",
                        margin: "0px 10px"
                    }}>Sign-up It's Free
                    </Button>

                    <div>
                        {firstSectionArray.map((val) => (<>
                       <div className='features' style={{ borderBottom:" 1px solid lightgray"}}> {val.checked ? <CheckIcon color="success" /> : <CloseIcon sx={{ color: pink[500] }} /> }  <p>{val.text}</p></div>
                        </>))}
                    </div>
                    <div className= "footer">
                    No Credit Card Required
                    </div>
                </div>


                <div className='innerContainer' >
                <p className='free' style={{backgroundColor:"#DC9E00"}}> PREMIUM </p>
                    <Button variant="contained" sx={{
                        borderRadius: '20px',
                        fontFamily: 'Open Sans',
                        fontSize: "17px",
                        padding: "6px 70px",
                        margin: "0px 10px",
                        backgroundColor:"#DC9E00"
                    }}>Upgade to Premium
                    </Button>

                    <div>
                        {firstSectionArray.map((val) => (<>
                       <div style={{display:"flex", alignItems:"center" , justifyContent : "space-between" ,  borderBottom: "1px solid lightgray", paddingRight : "20px"}}> <div className='features'> <CheckIcon sx={{ color: yellow[800] }} />  <p>{val.text}</p> </div>  <ErrorOutlineIcon sx={{color:grey[500]}} /></div>
                        </>))}
                    </div>
                    <div className= "footer">
                    3-Day Money-Back Guarantee
                    </div>
                </div>

            </div>

        </>
    )
}
