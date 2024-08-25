"use client"
import React from 'react';
import Cell from './Cell';
import { useStore } from '../store/useStore';

const ROWS = 10;
const COLS = 10;

const Grid = () => {
    const { cellData } = useStore();

    return (
        <table className="border-collapse w-full">
            <tbody>
                {Array.from({ length: ROWS }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: COLS }, (_, colIndex) => (
                            <Cell key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid;