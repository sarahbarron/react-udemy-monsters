import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    // leave this dynamic so you can use the search box anywhere
    // eg in one place you want to search movie in another you want to search cast
    // prop placeholder inserted here
    placeholder={placeholder}
    // prop is a function that handles the change
    onChange={handleChange}
  />
);
