import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "fe815d7021d44c35b9b31907f0b4c22c";

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("");

  // syntax of the useEffect hook

  useEffect(() => {
    // making API call in react
    // **async** — makes a function return a Promise
    // **await** — pauses execution until the Promise is resolved

    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      // save the result into a state
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} />
      <input
        className={styles.input}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        placeholder="Search recipes..."
      />
    </div>
  );
}
