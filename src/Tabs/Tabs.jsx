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
    return (
      <section className="section tab-loading">
        <h1>Loading....</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="tab-title">
        <h2>experience</h2>
        <div className="tab-underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn-container
          job info */}
      </div>
    </section>
  );
};

export default Tabs;
