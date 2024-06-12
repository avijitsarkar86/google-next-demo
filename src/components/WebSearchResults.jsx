import Link from "next/link";
import React from 'react';
import Parser from 'html-react-parser';
import PaginationButton from "./PaginationButton";

export default function WebSearchResults({ data }) {
  const {searchInformation, items} = data;
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {searchInformation?.totalResults} results ({searchInformation?.formattedSearchTime}) seconds
      </p>
      {items && items.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link href={result.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
            {result.title}
            </Link>
          </div>
          <p className="text-gray-600">
            {Parser(result.htmlSnippet)}
          </p>
        </div>
        
      ))}
      <PaginationButton />
    </div>
  )
}
