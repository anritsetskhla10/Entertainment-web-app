import Card from "../../components/card/Card"
import StyledContainer from "../../components/card/StyledContainer"
import SearchInput from "../../components/search component/SearchInput"
import { MediaListProps } from "../../types"


function Movies({data}:MediaListProps) {
  return (
    <div>
      <SearchInput></SearchInput>
      <h2 className="text-xl font-light tracking-[-0.31px] text-[#fff] mt-[26px] mb-[16px] ml-[16px]
      md:text-[32px] md:tracking-[-0.5px] md:mt-[34px] md:mb-[25px] md:ml-[25px]
      xl:mt-[35px] xl:mb-[25px] xl:ml-[0]">Movies</h2>
       <StyledContainer>
      {data.map((item, index) => (
          item.category == "Movie" && (
            <Card key={index} item={item}></Card>
          )
        ))}
     </StyledContainer>
    </div>
  )
}

export default Movies
