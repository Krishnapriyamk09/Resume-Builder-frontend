import React, { useState, useEffect } from 'react'
import {
  Typography,
  Paper,
  Button,
  Box
} from '@mui/material'
import { useParams } from 'react-router-dom'
import Edit from '../components/Edit'
import { downloadResume, uploadCloudinary, viewResumeAPI } from '../services/apiService'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";

function View() {
  const { id } = useParams()
  const [resume, setResume] = useState({})
  const [open, setOpen] = useState(false)

  // Fetch resume details
  const viewResume = async () => {
    try {
      const response = await viewResumeAPI(id)
      console.log(response)
      setResume(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewResume()
  }, [id])

  
  const handleEdit = () => {
    setOpen(true)
  }
  // Close Edit component
  const handleClose = () => {
    setOpen(false)
  }
  const downloadPdf = async()=>{
      console.log(document.getElementById('result'));
     const canvas = await html2canvas(document.getElementById('result'),{scale:3});
      console.log(canvas);
      let imageUrl=canvas.toDataURL("image/png")
      console.log(imageUrl);

      //we can give opions such as portrait(p) or scalar and other measuremnts
      const pdf=new jsPDF('p','mm','a4')

      //to define height and width
      const pdfWidth=pdf.internal.pageSize.getWidth()
      const pdfHeight=(canvas.height*pdfWidth)/canvas.width

      //to convert img to pdf
      pdf.addImage(imageUrl,'PNG',0,0,pdfWidth,pdfHeight)
      pdf.save('resume.pdf')

      //to give date and time
      const timeZone=new Date()
      console.log(timeZone);
      const formatedDate=`${timeZone.toLocaleDateString()},${timeZone.toLocaleTimeString()}`
      console.log(formatedDate);

      const cloudinaryResponse=await uploadCloudinary(imageUrl)
      console.log(`cloudinaryResponse:${cloudinaryResponse}`);

      const response=await downloadResume({...resume,imageUrl,id:formatedDate,resumeId:resume.id})
      console.log(response);
      
      
 }

 

  // Update resume data
  const handleSave = (updatedData) => {
    setResume(updatedData)
    setOpen(false)
  }

  // Show Edit component
  if (open) {
    return (
      <Edit
        resume={resume}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    )
  }

  return (
    <Box sx={{ padding: '20px' }}>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          padding: '10px'
        }}
      >
        <Button variant="text" onClick={downloadPdf}>
          Download CV
        </Button>

<Edit resume={resume}  
setResume={setResume}/>
        <Button
          variant="text"
        >
          Home
        </Button>
      </Box>

      {/* Resume Details */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Paper id="result"
          elevation={24}
          sx={{
            padding: '30px',
            width: '600px',
            maxWidth: '100%'
          }}
        >

          {/* Personal Details */}
          <Typography variant="h3">
            {resume?.fullName || 'Name'}
          </Typography>

          <Typography variant="body1">
            {resume?.phone || 'Phone'}
          </Typography>

          <Typography variant="body1">
            {resume?.email || 'Email'}
          </Typography>

          <Typography variant="body1">
            {resume?.linkedin || 'LinkedIn'}
          </Typography>

          <Typography variant="body1">
            {resume?.github || 'GitHub'}
          </Typography>

          <Typography variant="body1">
            {resume?.location || 'Location'}
          </Typography>

          <hr />

          {/* Professional Summary */}
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            Professional Summary
          </Typography>

          <Typography variant="body1">
            {resume?.summary || 'Professional Summary'}
          </Typography>

          <hr />

          {/* Technical Skills */}
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            Technical Skills
          </Typography>

          <Typography variant="body1">
            {Array.isArray(resume?.skills)
              ? resume.skills.join(', ')
              : resume?.skills || 'Skills'}
          </Typography>

          <hr />

          {/* Education */}
          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            Education
          </Typography>

          <Typography variant="body1">
            {resume?.degree || 'Degree'}
          </Typography>

          <Typography variant="body1">
            {resume?.college || resume?.university || 'College'}
          </Typography>

          <Typography variant="body1">
            {resume?.year || resume?.graduation || 'Year'}
          </Typography>

        </Paper>
      </Box>

    </Box>
  )
}

export default View