import {  MediaListProps } from "../../types";
import Slider from "../../components/swiper/Slider";
import SearchInput from "../../components/search component/SearchInput";
import Card from "../../components/card/Card";
import StyledContainer from "../../components/card/StyledContainer";



function Home({data, setDataInfo, setChangeInput, changeInput}: MediaListProps) {
  
  return (
    <div>
      <SearchInput setDataInfo={setDataInfo} setChangeInput={setChangeInput} changeInput={changeInput}></SearchInput>
      {changeInput ? '' :  
      <h2 className="text-xl font-light tracking-[-0.31px] text-[#fff] mt-[26px] mb-[16px] ml-[16px]
      md:text-[32px] md:tracking-[-0.5px] md:mt-[34px] md:mb-[25px] md:ml-[25px]
      xl:mt-[35px] xl:mb-[25px] xl:ml-[0]">Trending</h2>}
     {changeInput ? '' :  <Slider data={data}></Slider>}
     {changeInput ? '' :   <h2 className="text-6 font-light tracking-[-0.31px] text-[#fff] mt-[24px] mb-[24px] ml-[16px]
      md:text-[32px] md:tracking-[-0.5px] md:mt-[39px] md:mb-[24px] md:ml-[25px]
      xl:mt-[40px] xl:mb-[32px] xl:ml-[0]">Recommended for you</h2>}
      <StyledContainer className="recomend-section">
          
          {data.map((item, index) => (
            changeInput ?   
            <Card key={index} item={item} />
              :
            !item.thumbnail.trending && (
                  <Card key={index} item={item} />
              )
            ))}
      </StyledContainer>
    </div>
  )
}





export default Home
