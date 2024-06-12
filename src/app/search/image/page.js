import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from 'react';

export default async function ImageSearchPage({ searchParams }) {
  try {
    const { searchTerm, start } = searchParams;

    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${start || '1'}`;
    // console.log('url : ', url);

    const response = await fetch(url);
    // console.log('response : ', response);
    if (!response.ok) throw new Error('Something went wrong!!!');

    const data = await response.json();
    // const data = [];

    // console.log('data : ', data);
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
        <ImageSearchResults data={data} />
      </div>
    );
  } catch (error) {
    throw error;
  }

}
