import React from 'react';
import satData from './satData'; 

const Buttons = ({ filterByType, resetToAllSats, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={resetToAllSats}>All Orbits</button>
    </div>
  );
};

export default Buttons;


// lock file?
