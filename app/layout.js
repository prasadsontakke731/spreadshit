import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Spreadsheet App',
  description: 'A spreadsheet-like application built with Next.js and Tailwind CSS',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
};

export default Layout;