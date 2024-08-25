"use client"
import React from 'react';
import { useStore } from '../store/useStore';

const Pagination = () => {
    const { page, setPage } = useStore();

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="p-2 bg-gray-200">
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
                className="border p-1"
            >
                Previous
            </button>
            <span className="mx-2">Page {page + 1}</span>
            <button onClick={() => handlePageChange(page + 1)} className="border p-1">
                Next
            </button>
        </div>
    );
};

export default Pagination;