import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import StyledContainer from "../../components/card/StyledContainer";
import SearchInput from "../../components/search component/SearchInput";
import { MediaListProps } from "../../types";

function Bookmark({data, setDataInfo, setChangeInput, changeInput, toggleBookmark}: MediaListProps) {
  const [hasBookmarkedMovies, setHasBookmarkedMovies] = useState(false);
  const [hasBookmarkedSeries, setHasBookmarkedSeries] = useState(false);

  useEffect(() => {
    checkBookmarks();
  }, [data]);

  function checkBookmarks() {
    setHasBookmarkedMovies(data.some(item => item.isBookmarked && item.category === "Movie"));
    setHasBookmarkedSeries(data.some(item => item.isBookmarked && item.category !== "Movie"));
  }

  return (
    <div>
      <SearchInput setDataInfo={setDataInfo} setChangeInput={setChangeInput} changeInput={changeInput} pageType="bookmark"/>
      
      {hasBookmarkedMovies && (
        <>
          <h2 className="text-xl font-light tracking-[-0.31px] text-[#fff] mt-[26px] mb-[16px] ml-[16px]
            md:text-[32px] md:tracking-[-0.5px] md:mt-[34px] md:mb-[25px] md:ml-[25px]
            xl:mt-[35px] xl:mb-[25px] xl:ml-[0]">
            Bookmarked Movies
          </h2>
          <StyledContainer>
            {data.map((item, index) => (
              item.isBookmarked && item.category === "Movie" && (
                <Card key={index} item={item} toggleBookmark={toggleBookmark} index={index} />
              )
            ))}
          </StyledContainer>
        </>
      )}

      {hasBookmarkedSeries && (
        <>
          <h2 className="text-xl font-light tracking-[-0.31px] text-[#fff] mt-[26px] mb-[16px] ml-[16px]
            md:text-[32px] md:tracking-[-0.5px] md:mt-[34px] md:mb-[25px] md:ml-[25px]
            xl:mt-[35px] xl:mb-[25px] xl:ml-[0]">
            Bookmarked TV Series
          </h2>
          <StyledContainer>
            {data.map((item, index) => (
              item.isBookmarked && item.category !== "Movie" && (
                <Card key={index} item={item} toggleBookmark={toggleBookmark} index={index} />
              )
            ))}
          </StyledContainer>
        </>
      )}
    </div>
  );
}

export default Bookmark;
