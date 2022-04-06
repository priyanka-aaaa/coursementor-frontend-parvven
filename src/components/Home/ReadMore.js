import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 140) : text}
      <span onClick={toggleReadMore} className="text-primary cursor-pointer">
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
};
  

  
export default ReadMore;