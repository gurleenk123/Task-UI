import * as React from 'react'
import "./thirdComponent.css";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" style={{fontSize:"16px",color:"#499557"}}>
          {`${props.value}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};


export default function thirdComponent() {
  return (
   <>
   <div>
    <h2 className='pageTitle'>Write better, faster, and clearer instantly</h2>
    <p className='para'>QuillBot is trusted by students, professional writers, and<br></br> business people who want to write more effectively.</p>
   
    </div>

    <div className="progress">
    <div className='flexProgress'><CircularProgressWithLabel color ="success" value={"75% time saved"}  style={{ width:"170px",height:"170px"}}/><p>Average time savings per writing<br></br> project.</p></div>
    <div className="flexProgress"><CircularProgressWithLabel color ="success" value={"50+ million"}  style={{ width:"170px",height:"170px"}}/><p>Trusted by millions worldwide.</p></div>
    <div className="flexProgress"><CircularProgressWithLabel color ="success" value={"85% of students"}  style={{ width:"170px",height:"170px"}}/><p>Who reported their grades improved<br/> after using QuillBot.</p></div>
    </div>
   </>
  )
}
