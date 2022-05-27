import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./tabs.css";
const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return <div>Tabs</div>;
};

export default Tabs;
