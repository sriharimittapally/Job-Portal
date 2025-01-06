import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title:'',
    location:''
  });

  const [isSearched, setIsSearched] = useState(false);

  const [jobs, setJobs] = useState([]);

  const [showRecruiterLogin, setShowRecruiterLoign] = useState(false);

  //Function to fecth job data
  const fetchJobs = async ()=>{
    setJobs(jobsData);
  }

  useEffect(()=>{
    fetchJobs();
  },[])

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLoign
  };

  return <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>;
};
