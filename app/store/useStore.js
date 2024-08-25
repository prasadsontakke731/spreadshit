import create from 'zustand';



export const useStore = create((set) => ({
    cellData: Array.from({ length: 1000 }, () => Array(1000).fill('')),
    setCellData: (row, col, value) => set((state) => {
        const newCellData = [...state.cellData];
        newCellData[row][col] = value;
        return { cellData: newCellData };
    }),
    cellFormatting: 'text-left',
    setCellFormatting: (alignment) => set({ cellFormatting: alignment }),
    searchFilter: '',
    setSearchFilter: (filter) => set({ searchFilter: filter }),
    page: 0,
    setPage: (page) => set({ page }),
}));