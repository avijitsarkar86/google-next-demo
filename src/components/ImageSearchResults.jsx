import Image from "next/image";
import Link from "next/link";
import React from 'react'

export default function ImageSearchResults({ data }) {
  const {searchInformation, items} = data;
  return (
    <div className="pb-24 mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {
          items.map((item) => (
            <div className="mb-8" key={item.link}>
              <div className="group">
                <Link href={item.image.contextLink}>
                  <img
                    src={item.link} alt={item.title}
                    className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                  />
                </Link>
                <Link href={item.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">{item.title}</h2>
                </Link>
                <Link href={item.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">{item.displayLink}</p>
              </Link>
              </div>
              
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
