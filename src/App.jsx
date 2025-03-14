import React, { useState } from 'react';
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from './components/satData'; 

function App() {
  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map(data => data.orbitType))];

  const filterByType = (currentType) => {
    const filteredSats = satData.filter(newSatDisplay => newSatDisplay.orbitType === currentType);
    setSat(filteredSats);
  };

  const resetToAllSats = () => {
    setSat(satData); 
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        resetToAllSats={resetToAllSats} 
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;