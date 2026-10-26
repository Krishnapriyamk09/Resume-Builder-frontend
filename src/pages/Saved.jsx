import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSavedAPI, viewAllResumesAPI } from "../services/apiService";
import { Link } from "react-router-dom";

function Saved() {
  const [searchKey, setSearchKey] = useState("");

  const [resumes, setResumes] = useState([]);
  const [dummyResume,setDummyResumes]=useState([]);

  const searchOutput=useMemo (()=>{
      setResumes(dummyResume.filter(item => item.job.includes(searchKey))
)
  },[searchKey])

  const getAllResumes=async()=>{
    try{
          const response=await viewAllResumesAPI()
          console.log(response);
          setResumes(response.data)
          setDummyResumes(response.data)
    }
    catch(err){
        console.log(err);
        
    }
  }
  useEffect(()=>{
      getAllResumes()
  },[])
 
const deleteResume=async(id)=>{
    try{
      const response=await deleteSavedAPI(id)
      console.log(response);
      getAllResumes()
    }
    catch(err){
        console.log(err);
        
    }
  }


  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 7 },
        py: 5,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: "40px", md: "58px" },
        }}
      >
        All Saved Resumes
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          maxWidth: "1500px",
          fontSize: { xs: "16px", md: "21px" },
          mb: 8,
        }}
      >
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to efficiently view, search, filter, and
        manage candidate profiles. It provides a quick overview of available
        candidates and their key details, making the recruitment and
        candidate-selection process more organized and efficient.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
        }}
      >
        <TextField
          fullWidth
          onChange={(e)=>setSearchKey(e.target.value)}
          placeholder="Search"
          sx={{
            width: { xs: "100%", sm: "70%", md: "50%" }

            // "& .MuiOutlinedInput-root": {
            //   borderRadius: "8px",
            //   fontSize: "19px",
            //   height: "54px",
            // },

            // "& input::placeholder": {
            //   opacity: 1,
            //   color: "#4b5563",
            // },
          }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <SearchIcon
          //         sx={{
          //           fontSize: 30,
          //           color: "#202428",
          //         }}
          //       />
          //     </InputAdornment>
          //   ),
          // }}
        />
      </Box>


      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          maxWidth: "1600px",
          mx: "auto",
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <Table>
          {/* Header */}
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#24282c",
              }}
            >
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "7%",
                }}
              >
                #
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "35%",
                }}
              >
                Resume
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "40%",
                }}
              >
                Job Role
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                ...
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Body */}
          <TableBody>
          
         {
          resumes.length>0?
          resumes.map((item,index=1)=>(
                 <TableRow
               key={item.id}
                sx={{
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "18px",
                    py: 2,
                  }}
                >
                  {index + 1}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "19px",
                    py: 2,
                  }}
                >
                 <Link to={`/resume/${item.id}`}>
                  <Typography
                    component="a"
                    
                    sx={{
                      color: "#1769ff",
                      textDecoration: "underline",
                      fontSize: "19px",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {item.fullName}
                  </Typography>
                 </Link>
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "19px",
                    py: 2,
                  }}
                >
                  {item.job}
                </TableCell>

               <TableCell>
                <button onClick={()=>deleteResume(item.id)}>Delete</button>
               </TableCell>
              </TableRow>
          ))
          :"No data"
         }
         

         
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Saved;