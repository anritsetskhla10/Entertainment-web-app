import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue)

  return (
    <div className="w-full flex items-center gap-[19px] py-[27px] px-[19px] md:px-[25px] md:py-[34px] md:gap-[24px]">
      <Link to={'/search'}>
        <img className="w-[24px] h-[24px] p-1 md:w-[32px] md:h-[32px] cursor-pointer" src="/images/icon-search.svg" alt="search icon" />
      </Link> 
      <input
        className="w-[214px] bg-transparent text-base font-light opacity-50 text-[#fff]
          md:text-2xl md:placeholder:text-2xl md:w-[321px]
          placeholder:text-base placeholder:font-light placeholder:opacity-50 placeholder:text-[#fff]
          cursor-pointer"
        type="text"
        placeholder="Search for movies or TV series"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;
