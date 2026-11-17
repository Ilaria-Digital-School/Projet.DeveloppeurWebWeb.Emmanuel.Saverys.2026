import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    
    <div className="page-header">
      <div className="page-header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;