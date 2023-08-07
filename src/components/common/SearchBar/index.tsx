import { useRef } from "react";
import styles from "./styles.module.scss";

const SearchBar = function () {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div
      className={`${styles.searchBar} bg-white d-flex align-items-center gap-2`}
    >
      <img
        className={styles.searchImg}
        src="/search/search_icon.svg"
        alt="Ícone de pesquisa"
        onClick={handleIconClick}
      />
      <input
        type="text"
        className={`${styles.searchInput} bg-transparent border-0 outline-none w-100`}
        placeholder="Pesquise alguma informação em nosso site"
        ref={inputRef}
      />
    </div>
  );
};

export default SearchBar;
