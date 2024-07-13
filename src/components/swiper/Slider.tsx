import { StyledSlider } from './StyledSlider'; 
import { TData } from '../../types'; 
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';

type MediaListProps = {
  data: TData[];
  toggleBookmark: (index: number) => void;
};


function Slider({ data, toggleBookmark }: MediaListProps) {

  return (
    <StyledSlider>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          768: {
            spaceBetween: 30,
            slidesPerView: 2 
          },
          1020: {
            spaceBetween: 40,
            slidesPerView: 2.5
          },
          1220: {
            spaceBetween: 40,
            slidesPerView: 3 
          },
          1440: {
            spaceBetween: 40,
            slidesPerView: 2.5 
          }
        }}
      >
        {data.map((item, index) => (
          item.thumbnail.trending && (
            <SwiperSlide key={index}>
              <div className='thumbnail-container'>
                <img className='thumbnail' src={item.thumbnail.trending.small} alt={`${item.title} thumbnail`} />
                <h2>{item.title}</h2>
                <div className='content'>
                  <p className='year'>{item.year}</p>
                  <div className='circle'></div>
                  <div className='category-container'>
                    <img src={item.category === 'Movie' ? "./images/icon-category-movie.svg" : "./images/icon-category-tv.svg"} alt="category icon" />
                    <p className='category'>{item.category}</p>
                  </div>
                  <div className='circle'></div>
                  <p className='rating'>{item.rating}</p>
                </div>
                <div className='bookmark-container' onClick={() => toggleBookmark(index)}>
                  <img className='bookmark' src={item.isBookmarked ? "./images/icon-bookmark-full.svg" : "./images/icon-bookmark-empty.svg"} alt="bookmark icon" />
                </div>
                <div className='hover-container'>
                  <img src="/images/icon-play.svg" alt="play icon" />
                  <span>Play</span>
                </div>
              </div>
            </SwiperSlide>
          )
        ))}
      </Swiper>
    </StyledSlider>
  );
}

export default Slider;
