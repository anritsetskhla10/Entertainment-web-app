import { TData } from "../../types"
import Slider from "../swiper/Slider"
import { StyledMain } from "./StyledMain"

type MediaListProps = {
    data: TData[];
}

function Main({ data } : MediaListProps) {


  return (
    <StyledMain>
      <div className="w-full flex items-center gap-[19px] py-[27px] px-[19px] md:px-[25px] md:py-[34px] md:gap-[24px]">
        <img className="w-[24px] h-[24px] p-1 md:w-[32px] md:h-[32px] cursor-pointer" src="/images/icon-search.svg" alt="search icon" />
        <input className="w-[214px] bg-transparent text-base font-light opacity-50 text-[#fff]
        md:text-2xl md:placeholder:text-2xl md:w-[321px]
        placeholder:text-base placeholder:font-light placeholder:opacity-50 placeholder:text-[#fff]  
         cursor-pointer" type="text" placeholder="Search for movies or TV series" />
      </div>
      <h2 className="trending-title">Trending</h2>
        <Slider data={data}></Slider>
      <h2 className="recomended-title">Recommended for you</h2>
     <section className="recomend-section">
      {data.map((item, index) => (
          !item.thumbnail.trending && (
            <div key={index} className="card">
              <div className='thumbnail-container'>
                <img className='thumbnail' src={item.thumbnail.regular.small} alt={`${item.title} thumbnail`} />
                <div className='bookmark-container'>
                  <img className='bookmark' src={item.isBookmarked ? "./images/icon-bookmark-full.svg" : "./images/icon-bookmark-empty.svg"} alt="bookmark icon" />
                </div>
                </div>
                <div className='content'>
                  <div className="info">
                  <p className='year'>{item.year}</p>
                  <div className='circle'></div>
                  <div className='category-container'>
                    <img src={item.category === 'Movie' ? "./images/icon-category-movie.svg" : "./images/icon-category-tv.svg"} alt="category icon" />
                    <p className='category'>{item.category}</p>
                  </div>
                  <div className='circle'></div>
                  <p className='rating'>{item.rating}</p>
                  </div>
                <h3>{item.title}</h3>
              </div>
            </div>
          )
        ))}
     </section>

    </StyledMain>
  )
}

export default Main
