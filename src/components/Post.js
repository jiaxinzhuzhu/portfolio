import React from "react";
import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function Post() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-greem-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-centre cursive">Blog Page</h1>
        <h2 className="text-lg text-grey-600 flex justify-centre mb-12">
          Welcome
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data &&
            data.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
