import React from 'react'
import Resumeinput from '../components/Resumeinput'
import { Stack, Box } from '@mui/material'
import Preview from '../components/Preview'

function Info() {

  const [resumeDetails, setResumeDetails] = React.useState({
    fullName: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    degree: "",
    college: "",
    year: "",
    skills: "",
    summary: ""
  })

  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        sx={{
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          marginTop: '100px',
          padding: '30px'
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '45%' } }}>
          <Resumeinput
            resumeDetails={resumeDetails}
            setResumeDetails={setResumeDetails}
          />
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '45%' } }}>
          <Preview
            resumeDetails={resumeDetails}
          />
        </Box>

      </Stack>
    </div>
  )
}

export default Info