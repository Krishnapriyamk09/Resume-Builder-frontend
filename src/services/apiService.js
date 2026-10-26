import axiosServices from "../api/axiosService";

// add resume api
export const addResumeAPI=async(reqBody)=>{
    return await axiosServices('POST','/resumes',reqBody)

}

//get resume api

export const viewResumeAPI=async(id)=>{
    return await axiosServices('GET',`/resumes/${id}`,{})

}

//edit resume api
export const editResumeAPI=async(id,reqBody)=>{
    return await axiosServices('PUT',`/resumes/${id}`,reqBody)

}
//download resume api
export const downloadResume=async(reqBody)=>{
    return await axiosServices('POST',`/downloads`,reqBody)

}
//to view downloaded pd in all resumes
export const viewDownload=async(id)=>{
    return await axiosServices('GET',`/downloads`,{})

}

//url compression
export const uploadCloudinary=async(imageData)=>{
    const formData=new FormData()
    formData.append("file",imageData)
    formData.append(
        "upload_preset",
        "resume-builder"
    )

   const response =await fetch('https://api.cloudinary.com/v1_1/hasxx6vq/image/upload',{
    method:'POST',
    body:formData
   })
   let data=await response.json()
   console.log(data.url);
   return data.url
   
}

//api service for delete
export const deleteDownloadAPI=async(id)=>{
    return await axiosServices('DELETE',`/downloads/${id}`,{})
}

export const viewAllResumesAPI=async()=>{
    return await axiosServices('GET',`/resumes`,{})

}
//api service for delete saved resume
export const deleteSavedAPI=async(id)=>{
    return await axiosServices('DELETE',`/resumes/${id}`,{})
}