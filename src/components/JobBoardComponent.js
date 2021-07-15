import React from "react";

const JobBoardComponent = ({
  job: {
    company,
    logo,
    brandNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleClick,
}) => {
  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }

  return (
    <div className="container my-0 mx-auto">
      <div
        className={`${
          featured && "border-l-8 border-green-500"
        } flex flex-col items-start md:items-center  px-12 md:px-4  md:flex-row bg-white shadow-lg m-5 mb-12 p-6 pt-12 md:pt-6 rounded-lg `}
      >
        {/* Main */}

        <div className="mr-6 -mt-20 mb-3 md:-mt-0 md:mb-3">
          <img className="w-14 md:w-20" src={logo} alt="logo" />
        </div>
        <div className="flex-col mr-6">
          <div className="flex">
            <div className="text-green-400 capitalize text-base font-bold mr-2">
              {company}
            </div>

            {brandNew && (
              <div className="rounded-full py-1 px-3 mx-1 text-xs uppercase font-bold text-white bg-green-500">
                new
              </div>
            )}
            {featured && (
              <div className="rounded-full py-1 px-3 mx-1 text-xs uppercase font-bold text-white bg-black">
                featured
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl tracking-wide font-bold my-1">{position}</h2>
          </div>
          <div className="text-gray-400 text-base border-b-1">{`${postedAt} • ${contract} • ${location}`}</div>
        </div>

        {/* Tags */}
        <div className="flex items-start justify-start md:ml-auto flex-wrap mt-4 pt-2 md:mt-0 md:pt-0 border-t border-gray-300 md:border-t-0">
          {tags
            ? tags.map((tag, idx) => (
                <span
                  onClick={() => handleClick(tag)}
                  className="cursor-pointer rounded px-2 py-1 mr-4 my-2 bg-green-100 text-green-400 text-xs"
                  key={idx}
                >
                  {tag}
                </span>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default JobBoardComponent;
