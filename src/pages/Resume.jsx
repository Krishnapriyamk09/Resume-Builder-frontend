import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Header from '../components/Header'
import Paper from '@mui/material/Paper'
import DescriptionIcon from '@mui/icons-material/Description'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
function Resume() {
  return (
    <>
     
      <Box
        sx={{
          padding: '40px 8%',
          textAlign: 'center'
        }}
      >

        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold'
          }}
        >
          Create an ATS Friendly Resume in Minutes with AI
        </Typography>



 <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Paper
  sx={{
    width: '350px',
    height: '200px',
    padding: '50px',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  }}
>
  <DescriptionIcon
  sx={{
    fontSize: 45,
    color: 'blue',
    marginBottom: '15px'
  }}
/>

  <Typography variant="h5">
    Add Your Details
  </Typography>

  <Typography>
    Our AI will generate Skills & Summary
  </Typography>

  <Typography variant="h6">
    Step 1
  </Typography>
</Paper>




 <Paper
  sx={{
    width: '350px',
    height: '200px',
    padding: '50px',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  }}
>
  <SimCardDownloadIcon
  sx={{
    fontSize: 45,
    color: 'red',
    marginBottom: '15px'
  }}
/>

  <Typography variant="h5">
   Download your Resume
  </Typography>

  <Typography>
    Download CV as PDF start applying
  </Typography>

  <Typography variant="h6">
    Step 2
  </Typography>
</Paper>



</Box>

<Link to={'/resume-details'}>
<Button
  variant="contained"
  sx={{
    marginTop: '80px',
    backgroundColor: '#8b5e3c'
  }}
>
  LET'S START
</Button>
</Link>

      </Box>

    </>
  )
}

export default Resume