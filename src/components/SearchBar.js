import React, { useState } from "react";

export default function SearchBar({ setTerm }) {
  const [keywords, setKeywords] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTerm(keywords);
  };
  return (
    <>
      <form className="flex justify-center mt-3 mb-10">
        <input
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="inline-block mr-4 px-2 py-2 text-xl border-2 rounded w-full max-w-xl"
          type="text"
          placeholder="enter here"
        ></input>
        <button
          onClick={submitHandler}
          type="submit"
          className="px-4 border-2 rounded-lg text-white font-semibold bg-pink-500"
        >
          Search
        </button>
      </form>
    </>
  );
}
