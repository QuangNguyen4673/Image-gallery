import React from "react";

export default function ImageCard({ images }) {
  return images.map((data) => {
    const { downloads, likes, views, user, webformatURL } = data;
    const tags = data.tags.split(", ");
    return (
      <div
        key={data.id}
        className="overflow-hidden w-full rounded-md border-2 "
      >
        <div className="h-48">
          <img src={webformatURL} alt="\#" className="h-full w-full" />
        </div>
        <div className="p-1">
          <div className="mb-2 font-semibold text-purple-500 text-lg">
            Photo by {user}
          </div>
          <ul className="mb-4">
            <li>
              <strong className="mr-1">Views:</strong>
              {views}
            </li>
            <li>
              <strong className="mr-1">Download:</strong>
              {downloads}
            </li>
            <li>
              <strong className="mr-1">Likes:</strong>
              {likes}
            </li>
          </ul>
          <div className="badge-container">
            {tags.map((tagName, index) => {
              return (
                <span
                  key={index}
                  className="inline-block px-3 py-1 mr-2 mb-2 bg-gray-200 text-gray-700 
                  font-semibold text-sm rounded-full border-2 "
                >
                  #{tagName}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
}
