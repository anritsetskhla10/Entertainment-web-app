import { ChangeEvent, useState, useEffect } from 'react';
import { TData } from "../../types";
import OriginalData from '../../../data.json';

interface SearchProps {
  setDataInfo: React.Dispatch<React.SetStateAction<TData[]>>;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  changeInput: boolean;
  pageType: string;
}

const SearchInput = ({ setDataInfo, setChangeInput, changeInput, pageType }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [newOriginalData, setNewOriginalData] = useState(OriginalData);
  const [dataLength, setDataLength] = useState<number|null>(null);

  useEffect(() => {
    setNewOriginalData(newOriginalData);
  }, [newOriginalData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setChangeInput(true);

    let filteredData: TData[] = [];

    if (event.target.value === '') {
      filteredData = OriginalData;
      setChangeInput(false);
    } else {
      filteredData = OriginalData.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()));
    }

    if (pageType === 'bookmark') {
      filteredData = filteredData.filter(item => item.isBookmarked);
    } else if (pageType === 'movies') {
      filteredData = filteredData.filter(item => item.category === 'Movie');
    } else if (pageType === 'series') {
      filteredData = filteredData.filter(item => item.category !== 'Movie');
    }

    setDataInfo(filteredData);
    setDataLength(filteredData.length);
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
