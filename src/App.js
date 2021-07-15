import React, { useState, useEffect } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }
    console.log(filters);
    // return tags.some((tag) => filters.includes(tag));
    return filters.every((filter) => tags.includes(filter));
  };

  const handleClick = (tag) => {
    // avoid readding the tag
    if (filters.includes(tag)) return;
    // console.log(tag, filters);
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const handleFilterClear = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);
  // console.log(filteredJobs, filters, jobs);
  return (
    <div className="App">
      <header className="bg-green-700 bg-opacity-70 h-40 mb-20">
        <img
          className="bg-center bg-cover h-full"
          src="./images/bg-header-desktop.svg"
          alt="desktop"
        />
      </header>
      <div className="">
        {filters.length > 0 && (
          <div
            className={`-mt-40 ms:container relative flex items-center flex-wrap bg-white shadow-md my-16 mx-20 p-6 pt-9 rounded`}
          >
            {filters.map((filter, idx) => (
              <div className="mb-3">
                <span
                  className="rounded-l pl-2 pr-1 py-1 my-2 bg-green-100 text-green-400 text-xs"
                  key={idx}
                >
                  {filter}
                </span>
                <span
                  onClick={() => handleFilterClick(filter)}
                  className="cursor-pointer rounded-r pl-1 pr-2 py-1 mr-4 my-2 bg-green-400 text-green-100 text-xs"
                >
                  X
                </span>
              </div>
            ))}
            <span
              onClick={() => handleFilterClear()}
              className="absolute top-2 right-2 ml-auto text-gray-400 cursor-pointer hover:text-gray-500 text-xs underline"
            >
              Clear
            </span>
          </div>
        )}
      </div>
      {jobs.length === 0 ? (
        <p>Jobs are loading...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent job={job} key={job.id} handleClick={handleClick} />
        ))
      )}
    </div>
  );
}

export default App;
