import axios from "axios";
// import { langContexte } from "../Context/Lang";
// import { useContext } from "react";


// const { langContext, } = useContext(langContexte);

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", 
});


axiosInstance.interceptors.request.use(function (config) {
  config["params"] = {
    
    api_key: "a295c2fda0d44898d34830970fce7edc", 
    // lang: langContext,
  };

 console.log(config);
 
  return config;
});

axiosInstance.interceptors.response.use(function (response) {
    
    response["aaaa"] = {
      
      ahmed: "ahmed", 
    };
    console.log(response);
    
    
    return response;
  });