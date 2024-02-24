import React from 'react';

const Filter = ({ onFilter }) => {
  let titleInput, ratingInput;

  const handleFilter = () => {
    const filterCriteria = {
      title: titleInput.value,
      rating: parseFloat(ratingInput.value)
    };
    onFilter(filterCriteria);
  };

  return (
    <div>
      <input type="text" placeholder="Title" ref={(node) => (titleInput = node)} />
      <input type="number" placeholder="Rating" ref={(node) => (ratingInput = node)} />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;