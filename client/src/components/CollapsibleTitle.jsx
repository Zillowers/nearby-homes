import React from 'react';

const CollapsibleTitle = ({ isExpanded, zipcode, toggleCollapsibleTitle }) => {
  let className = 'collapsible-title';
  isExpanded ? (className += '-collapsible') : (className += '-collapsed');

  return (
    <>
      <h2 className={className} onClick={toggleCollapsibleTitle}>
        Neighborhood:
        {zipcode}
      </h2>
    </>
  );
};

export default CollapsibleTitle;
