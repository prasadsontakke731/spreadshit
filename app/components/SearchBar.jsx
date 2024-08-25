"use client"
import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { setSearchFilter } = useStore();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setSearchFilter(e.target.value);
    };

    return (
        <div className="p-2 bg-gray-100">
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search..."
                className="border p-1 w-full"
            />
        </div>
    );
};

export default SearchBar;