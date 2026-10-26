import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  Link,
} from "@mui/material";
import Modal from '@mui/material/Modal';
import { deleteDownloadAPI, viewDownload } from '../services/apiService';
import { Pie, PieChart, Tooltip } from 'recharts';
//import { RechartsDevtools } from '@recharts/devtools';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Download({ isAnimationActive = true }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allDownloads,setallDownloads] = useState([])
  //view all downloads
  const getDownloads = async()=>{
    const response = await viewDownload()
    console.log(response);  
    setallDownloads(response.data)
  }

  useEffect(()=>{
    getDownloads()
  },[])

  const deleteDownloads=async(id)=>{
    try{
      const response=await deleteDownloadAPI(id)
      console.log(response);
      getDownloads()
    }
    catch(err){
        console.log(err);
        
    }
  }

  return (
    <div>
      <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "white",
                py: { xs: 7, md: 10 },
                position: "relative",
                zIndex: 2,
                mt: 5,
                
              }}
            >
              <Container maxWidth="lg">

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >

    {/* Heading */}
    <Typography
      sx={{
        fontSize: { xs: 35, md: 40 },
        fontWeight: 700,
        fontFamily: "serif",
      }}
    >
      All Downloaded Resume Details
    </Typography>

    {/* Button */}
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#8b604b",
        fontSize: 15,
        textTransform: "none",
        px: 2,
        py: 0.5,
      }} onClick={handleOpen}
    >
      View in Chart
    </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
      {/* <RechartsDevtools /> */}
    </PieChart>
        </Box>
      </Modal>
  </Box>

  <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "serif",
          mt: 1,
        }}
      >
        Total Downloaded resumes from our site is 10
      </Typography>

      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        gap: 3,
        width: "100%",
        mt: 6,
        '& > :not(style)': {
          width: 250,
          height: 300
        },
      }}
    >
    {
      allDownloads.length>0?
      allDownloads.map(item=>(
   <div key={item.id} style={{width:'500px',height:'800px'}}>
         <p>Downloaded Date:{item.formatedDate}</p> delete
          <Paper  elevation={3}
      sx={{
      width: 400,
      height: 650,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      p: 3,
    m:3
    }}>
     
    <img src={item.imageUrl} width={'300px'} alt="" />
      
      <button variant="contained" color="error" onClick={()=>deleteDownloads(item.id)}>Delete</button>


    </Paper>
   </div>
      ))
      :"no data"
    }

   
    </Box>

</Container>
        </Box>
    </div>
  )
}

export default Download