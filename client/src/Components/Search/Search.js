import React from 'react';


const Search = ({ setAppState }) => {
  return (
    <div className="searchContainer">
    <input className="search" placeholder='Search'
      type='text'
      onChange={(event) => { setAppState({ string: event.target.value }); }}
      aria-label="Search by job title."
    />
    </div>
  );
};


export default Search;
