import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from 'react';

export default async function WebSearchPage({ searchParams }) {
  const { searchTerm, start } = searchParams;

  await new Promise((resolve) => setTimeout(resolve, 1000));


  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${start || '1'}`;
  // console.log('url : ', url);

  const response = await fetch(url);
  if (!response.ok) throw new Error('Something went wrong!!!');

  const data = await response.json();
  const results = data.items;


  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No result found for {searchTerm}</h1>
        <p className="text-lg">
          Try searching web or images for something else {" "}
          <Link href='/' className="text-blue-500">Home</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* {results && results.map((result) => <h1 key={result.title}>{result.title}</h1>)} */}
      <WebSearchResults data={data} />
    </div>
  );




}
