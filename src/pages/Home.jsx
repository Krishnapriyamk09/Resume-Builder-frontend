import React from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Box>

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          height: "750px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "55%",
            padding: "70px 50px",
            textAlign: "center",
            backgroundColor: "rgba(30,30,30,0.55)",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {
                xs: "32px",
                md: "50px",
              },
              fontWeight: "bold",
              lineHeight: 1.3,
              fontFamily: "Georgia, serif",
            }}
          >
            Designed To Get Hired.
            <br />
            Your Skills, Your Story,
            <br />
            Your Next Job – All In One.
          </Typography>
<Link to={'/resume'}>
          <Button 
            variant="contained"
            sx={{
              mt: 5,
              backgroundColor: "#96664f",
              padding: "14px 25px",
              fontSize: "18px",
              textTransform: "none",
              fontFamily: "Georgia, serif",
              "&:hover": {
                backgroundColor: "#754d3b",
              },
            }}
          >
            Make your Resume with AI
          </Button>
          </Link>
        </Paper>
      </Box>


      {/* ================= WHAT'S AI RBUILDER ================= */}
      <Box
        sx={{
          padding: {
            xs: "50px 25px",
            md: "70px 12%",
          },
        }}
      >

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: "38px",
              md: "55px",
            },
            mb: 8,
          }}
        >
          What's AI rBuilder
        </Typography>

        <Grid
          container
          spacing={8}
          alignItems="center"
        >

          {/* TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                textAlign: "justify",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                textAlign: "justify",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                textAlign: "justify",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                textAlign: "justify",
                fontFamily: "Georgia, serif",
              }}
            >
              Users can edit content, preview their resume, and download it
              in formats such as PDF. This type of system is especially useful
              for students and fresh graduates.
            </Typography>

          </Grid>


          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
              alt="Professional"
              sx={{
                width: "100%",
                height: {
                  xs: "400px",
                  md: "600px",
                },
                objectFit: "cover",
              }}
            />

          </Grid>

        </Grid>
      </Box>


      {/* ================= TEAM IMAGE ================= */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85"
        alt="Team"
        sx={{
          width: "100%",
          height: {
            xs: "350px",
            md: "600px",
          },
          objectFit: "cover",
          display: "block",
        }}
      />


      {/* ================= TESTIMONY ================= */}
      <Box
        sx={{
          padding: {
            xs: "50px 25px",
            md: "70px 13%",
          },
        }}
      >

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            fontSize: {
              xs: "40px",
              md: "55px",
            },
            mb: 8,
          }}
        >
          Testimony
        </Typography>


        <Grid
          container
          spacing={8}
          alignItems="center"
        >

          {/* TESTIMONIAL TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography
              sx={{
                fontSize: "29px",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              Trusted by professionals worldwide.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              At rBuilder, we don't just help you create résumés — we help
              you land the job. Whether you're a seasoned professional or
              just starting out, our tools are designed to get results.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              In fact, users who used rBuilder reported getting hired an
              average of 48 days faster.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: 1.7,
                fontFamily: "Georgia, serif",
              }}
            >
              Join thousands of job-seekers who've fast-tracked their
              careers with a résumé that truly stands out.
            </Typography>

          </Grid>


          {/* PEOPLE GRID */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Grid container spacing={3}>

              {[
                "women/44",
                "women/65",
                "men/32",
                "men/75",
                "men/46",
                "women/68",
                "women/12",
                "women/33",
                "men/22",
                "men/15",
                "men/52",
                "men/55",
              ].map((person, index) => (
                <Grid size={3} key={index}>

                  <Box
                    component="img"
                    src={`https://randomuser.me/api/portraits/${person}.jpg`}
                    alt="User"
                    sx={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                  />

                </Grid>
              ))}

            </Grid>

          </Grid>

        </Grid>
      </Box>


      {/* ================= FOOTER ================= */}
      <Box
        sx={{
          backgroundColor: "#050505",
          color: "white",
          padding: {
            xs: "50px 25px 80px",
            md: "65px 5% 80px",
          },
        }}
      >

        <Grid container spacing={10}>

          {/* LEFT */}
          <Grid size={{ xs: 12, md: 7 }}>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              AI rBuilder
            </Typography>

            <Typography
              sx={{
                fontSize: "19px",
                lineHeight: 1.8,
                maxWidth: "650px",
                fontFamily: "Georgia, serif",
                textAlign: "justify",
              }}
            >
              An AI rBuilder suggests job-specific keywords,
              professional summaries, and skill recommendations to
              make the resume more effective and ATS friendly.
              The main goal of the AI Powered Resume Builder is to
              simplify the resume creation process and help job
              seekers build professional, well-structured resumes
              in a few minutes.
            </Typography>

          </Grid>


          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 5 }}>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: "19px",
                mb: 2,
                fontFamily: "Georgia, serif",
              }}
            >
              ✉ resumebuilder@gmail.com
            </Typography>

            <Typography
              sx={{
                fontSize: "19px",
                mb: 4,
                fontFamily: "Georgia, serif",
              }}
            >
              ☎ 9087654321
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                mb: 3,
              }}
            >
              Connect With Us
            </Typography>

            <Typography sx={{ fontSize: "30px" }}>
              ◎ &nbsp; f &nbsp; ◉
            </Typography>

          </Grid>

        </Grid>


        {/* BOTTOM */}
        <Box
          sx={{
            borderBottom: "4px solid white",
            mt: 7,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
            }}
          >
            Designed & built with using React
          </Typography>
        </Box>

      </Box>

    </Box>
  );
}

export default Home;