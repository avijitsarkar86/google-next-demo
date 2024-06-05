
import React from 'react';
import SearchHeader from "@/components/SearchHeader";
import './../../app/globals.css';

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
