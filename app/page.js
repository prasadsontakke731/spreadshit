import React from 'react';
import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <Grid />
      {/* <Toolbar /> */}
      <Pagination />
    </div>
  );
};

export default Page;