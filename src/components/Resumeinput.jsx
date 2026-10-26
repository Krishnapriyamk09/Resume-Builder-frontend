import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from '../assets/jobRoles.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { addResumeAPI } from '../services/apiService'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
const steps = [
  'Basic Informations',
  'Contact details',
  'Educational Details',
  'Review & Submit'
]

function ResumeInputs({ resumeDetails, setResumeDetails }) {
  console.log(resumeDetails);
  
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleSubmit = async () => {
  try {
    const response = await addResumeAPI(resumeDetails);

    const resumeId = response.data.id;

    await Swal.fire({
      title: "Good job!",
      text: "Resume added successfully!",
      icon: "success"
    });

    navigate(`/resume/${resumeId}`);

  } catch (error) {
    console.error("Error adding resume:", error.response?.data || error.message);

    Swal.fire({
      title: "Error!",
      text: "Unable to add resume. Please check your backend API.",
      icon: "error"
    });
  }
};

  // const handleSubmit = async() => {
  //  const response = await addResumeAPI(resumeDetails)
  //  console.log(response); 
  // }

  const previousActiveStepRef = React.useRef(activeStep)
  const resetButtonRef = React.useRef(null)
  const nextButtonRef = React.useRef(null)

  // Manage focus when the active step changes 
  React.useEffect(() => {

    const previousActiveStep = previousActiveStepRef.current

    previousActiveStepRef.current = activeStep

    if (activeStep === steps.length) {

      // If the user has completed all steps and hits "Finish", 
      // focus the "Reset" button. 
      resetButtonRef.current?.focus()

      return
    }

    if (
      activeStep === 0 &&
      previousActiveStep === steps.length
    ) {

      // If the user has completed all steps and hits "Reset", 
      // focus the "Next" button. 
      nextButtonRef.current?.focus()
      return
    }

  }, [activeStep])


  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>

          <h1>Personal Details</h1>
          <TextField id="standard-basic" label="Full Name" variant="standard"  fullWidth   value={resumeDetails.fullName}   onChange={(e) => setResumeDetails({
        ...resumeDetails,
        fullName: e.target.value})}/>  <br />
          <TextField id="standard-basic" label="Location" variant="standard"  fullWidth    value={resumeDetails.location}  onChange={(e) => setResumeDetails({
        ...resumeDetails,
        location: e.target.value})} /> <br />

        <FormControl variant="standard" fullWidth  sx={{ m: 1, minWidth: 120 }}>
             <InputLabel id="demo-simple-select-label ">Job</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
     value={resumeDetails.job}
    label="Job"
     onChange={(e) => setResumeDetails({
      ...resumeDetails,
      job: e.target.value
    })}
  >

  {
    jobRoles.jobRoles.map(item => (
      <MenuItem value={item}>{item}</MenuItem>
    ))
  }

    <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
    <MenuItem value="Backend Developer">Backend Developer</MenuItem>
    <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
  </Select>

                        </FormControl>
          {/* <TextField id="standard-basic" label="Job Title" variant="standard" onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            job: e.target.value })} /> <br /> */}

            
        </div>
      )
      case 1: return (
        <div>
          <h1>Contact Details</h1>
          <TextField id="standard-basic" label="Email" variant="standard" fullWidth    value={resumeDetails.email} onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            email: e.target.value })} />  <br />
          <TextField id="standard-basic" label="Contact Number" variant="standard" fullWidth     value={resumeDetails.phone}   onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            phone: e.target.value })}/> <br />
          <TextField id="standard-basic" label="Linkedin Link" variant="standard" fullWidth   value={resumeDetails.linkedin} onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            linkedin: e.target.value})}  /> <br />
          <TextField id="standard-basic" label="Github Link" variant="standard"  fullWidth   value={resumeDetails.github}    onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            github: e.target.value})}  /> <br />
        </div>
      )

      case 2: return (
        <div>
          <h1>Education Details</h1>
          <TextField id="standard-basic" label="Bachelors Degree" variant="standard"  fullWidth  value={resumeDetails.degree}    onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            degree: e.target.value})} /> <br />
          <TextField id="standard-basic" label="College/University Name" variant="standard" fullWidth    value={resumeDetails.college}  onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            college: e.target.value})}  /> <br />
          <TextField id="standard-basic" label="Year of Graduation" variant="standard"  fullWidth   value={resumeDetails.year}  onChange={(e)=> setResumeDetails({
            ...resumeDetails,
            year: e.target.value})} /> <br />
        </div>
      )

      case 3: return (
        <div>
          <h1>Skills and Summary</h1>
          <Typography variant="body1"
            sx={{
              fontSize: '18px',
              color: '#333',
              textAlign: 'left',
              marginTop: '20px',
              marginLeft: '20px'
            }}
          >
            Our AI will generate Skills & Summary according to your job role.
            Once the form gets submitted, user won't get the chance to update the
            resume details. If you want to proceed please click the{' '}
            <strong>Generate AI Skill & Summary</strong>
          </Typography>
        </div>
      )

      default: return null
    }


  }


  const handleGenerateSummary = () => {
    handleNext( )
    console.log(resumeDetails);

    setResumeDetails({...resumeDetails,skills:jobSkills
      [resumeDetails.job],summary:summaries[resumeDetails.job]
    })
  }




  return (
    <Box sx={{ width: '100%' }}>

      <Stepper activeStep={activeStep}>

        {steps.map((label, index) => {

          const stepProps = {}
          const labelProps = {}

          return (

            <Step
              key={label}
              {...stepProps}
            >

              <StepLabel {...labelProps}>
                {label}
              </StepLabel>

            </Step>

          )

        })}

      </Stepper>


      {activeStep === steps.length ? (

        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2
            }}
          >

            <Box sx={{ flex: '1 1 auto' }} />

            <Button
              onClick={handleSubmit}
           
            >
              Submit
            </Button>

          </Box>

        </React.Fragment>

      ) : (

        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>
          <Box>
            Contents
            {
              renderFormContent(activeStep)
            }
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2
            }}
          >

            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            <div ref={nextButtonRef}  >
              {activeStep === steps.length - 1
                ?
                <Button onClick={handleGenerateSummary}>Generate AI Skilss and Summary</Button>
                :
                <Button onClick={handleNext}>Next</Button>
              }
            </div>

          </Box>

        </React.Fragment>

      )}

    </Box>
  )
}

export default ResumeInputs