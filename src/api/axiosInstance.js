import axios from "axios";

const instance = axios.create({
  baseURL: "https://resume-builder-knc9.onrender.com",
  timeout: 5000
});

// Global error handling
instance.interceptors.response.use(
  (response) => {
    console.log("API RESPONSE RECEIVED...");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.log("Unauthorized access");
      } else if (status === 404) {
        console.log("API IS NOT FOUND...");
      } else if (status === 500) {
        console.log("Something went wrong...");
      }
    } else if (error.request) {
      console.log("No response from the server");
    } else {
      console.log("Error: " + error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;