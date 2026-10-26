import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

function Preview({ resumeDetails }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '650px',
        minHeight: '750px',
        mx: 'auto',
        p: { xs: 3, md: 5 },
        bgcolor: '#fff',
        color: '#222',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        borderRadius: '4px',
        boxSizing: 'border-box',
        overflowWrap: 'anywhere'
      }}
    >
     
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Georgia, serif',
          mb: 1
        }}
      >
        {resumeDetails.fullName || 'Your Name'}
      </Typography>

      <Typography sx={styles.detail}>
        {resumeDetails.job || 'Your Job Title'}
      </Typography>

      <Typography sx={styles.detail}>
        Phone: {resumeDetails.phone || 'Phone Number'}
      </Typography>

      <Typography sx={styles.detail}>
        Email: {resumeDetails.email || 'Email Address'}
      </Typography>

      <Typography sx={styles.detail}>
        LinkedIn: {resumeDetails.linkedin || 'LinkedIn Link'}
      </Typography>

      <Typography sx={styles.detail}>
        GitHub: {resumeDetails.github || 'GitHub Link'}
      </Typography>

      <Typography sx={styles.detail}>
        Location: {resumeDetails.location || 'Your Location'}
      </Typography>

      <Divider sx={styles.divider} />

      <Typography variant="h5" sx={styles.heading}>
        Professional Summary
      </Typography>

      <Typography sx={styles.paragraph}>
        {resumeDetails.summary ||
          'Your professional summary will appear here.'}
      </Typography>

      <Divider sx={styles.divider} />

      <Typography variant="h5" sx={styles.heading}>
        Technical Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: 2.5,
          rowGap: 1.5,
          pl: 1
        }}
      >
        {resumeDetails.skills.length > 0 ? (
          resumeDetails.skills.map((skill, index) => (
            <Typography
              key={`${skill}-${index}`}
              sx={styles.skill}
            >
              {skill}
            </Typography>
          ))
        ) : (
          <Typography sx={styles.paragraph}>
            Your skills will appear here.
          </Typography>
        )}
      </Box>

      <Divider sx={styles.divider} />

   
      <Typography variant="h5" sx={styles.heading}>
        Education
      </Typography>
      <Typography sx={styles.paragraph}>
        {resumeDetails.degree || 'Degree'}
      </Typography>
      <Typography sx={styles.paragraph}>
        University/College Name: {resumeDetails.college || 'College Name'}
      </Typography>
      <Typography sx={styles.paragraph}>
        Year of Graduation: {resumeDetails.year || 'Year'}
      </Typography>
    </Box>
  )
}

const styles = {
  detail: {
    fontSize: '15px',
    lineHeight: 1.8,
    overflowWrap: 'anywhere'
  },

  heading: {
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    mb: 1.5
  },

  paragraph: {
    fontSize: '15px',
    lineHeight: 1.8,
    mb: 1,
    overflowWrap: 'anywhere'
  },

  skill: {
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif'
  },

  divider: {
    my: 2.5,
    borderColor: '#ccc'
  }
}

export default Preview