import { ChangeEvent, useState, useEffect } from 'react';
import {  TData } from "../../types";
import OriginalData from '../../../data.json'

interface SearchProps{
  setDataInfo: React.Dispatch<React.SetStateAction<TData[]>>;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  changeInput: boolean;
}

const SearchInput = ({ setDataInfo ,setChangeInput, changeInput}: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [newOriginalData, setNewOriginalData] = useState(OriginalData);
  const [dataLength, setDataLength] = useState<number|null>()

  useEffect(() => {
    setNewOriginalData(newOriginalData);
  }, [newOriginalData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setChangeInput(true);


    if (event.target.value === '') {
      setDataInfo(OriginalData);
      setChangeInput(false)
    } else {
      const newData: TData[] = OriginalData.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()));
      setDataInfo(newData);
      setDataLength(newData.length)
    }
  };

  return (
    <div>
      <div className="w-full flex items-center gap-[19px] py-[27px] px-[19px] md:px-[25px] md:py-[34px] md:gap-[24px]">
        <img className="w-[24px] h-[24px] p-1 md:w-[32px] md:h-[32px] cursor-pointer" src="/images/icon-search.svg" alt="search icon" /> 
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
       {changeInput &&
       <h2 className="text-xl font-light tracking-[-0.31px] text-[#fff] mt-[24px] mb-[24px] ml-[16px]
        md:text-[32px] md:tracking-[-0.5px] md:mt-[34px] md:mb-[25px] md:ml-[25px]
        xl:mt-[35px] xl:mb-[25px] xl:ml-[0]">Found {dataLength} results for ‘{inputValue}’</h2>
       } 
    </div>
  );
}

export default SearchInput;
