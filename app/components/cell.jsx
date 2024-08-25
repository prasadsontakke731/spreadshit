"use client"
import React, { useState } from 'react';
import { useStore } from '../store/useStore';



const Cell = ({ rowIndex, colIndex }) => {
    const { cellData, setCellData, cellFormatting } = useStore();
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(cellData[rowIndex]?.[colIndex] || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleBlur = () => {
        setCellData(rowIndex, colIndex, value);
        setIsEditing(false);
    };

    return (
        <td
            className={`border p-2 ${cellFormatting} text-left`}
            style={{ minWidth: '100px', minHeight: '30px' }}
            onClick={() => setIsEditing(true)}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className="w-full h-full p-1 border-none"
                />
            ) : (
                <span>{value}</span>
            )}
        </td>
    );
};

export default Cell;