import React from 'react';

const Pet = ({ name, animal, breed }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </>
  );
};

export default Pet;
