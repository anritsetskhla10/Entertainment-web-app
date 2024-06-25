import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TData } from '../../types';

interface CardProps {
  item: TData;
}

function Card({ item }: CardProps) {
  const [thumbnailSrc, setThumbnailSrc] = useState(item.thumbnail.regular.small);

  const updateThumbnailSrc = () => {
    if (window.innerWidth >= 1440) {
      setThumbnailSrc(item.thumbnail.regular.large);
    } else if (window.innerWidth >= 768) {
      setThumbnailSrc(item.thumbnail.regular.medium);
    } else {
      setThumbnailSrc(item.thumbnail.regular.small);
    }
  };

  useEffect(() => {
    updateThumbnailSrc();
    window.addEventListener('resize', updateThumbnailSrc);
    return () => window.removeEventListener('resize', updateThumbnailSrc);
  }, []);
  
  return (
    <StyledCard className="card">
      <div className='thumbnail-container'>
        <img
          className='thumbnail'
          src={thumbnailSrc}
          alt={`${item.title} thumbnail`}
        />
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
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  .thumbnail-container {
    width: 164px;
    height: 110px;
    position: relative;
    margin-bottom: 8px;

    .thumbnail {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }

    .bookmark-container {
      width: 32px;
      height: 32px;
      padding: 9px 10px;
      border-radius: 50%;
      background-color: rgba(16, 20, 30, 0.5);
      position: absolute;
      top: 8px;
      right: 8px;

      .bookmark {
        width: 12px;
        height: 14px;
        cursor: pointer;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 6px;

      .circle {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        opacity: 0.5;
        background-color: #fff;
      }

      .year {
        font-size: 11px;
        font-weight: 300;
        color: #fff;
        opacity: 0.75;
      }

      .category-container {
        display: flex;
        align-items: center;
        gap: 6px;

        & > img {
          width: 12px;
          height: 12px;
        }

        .category {
          font-size: 11px;
          font-weight: 300;
          color: #fff;
          opacity: 0.75;
        }
      }

      .rating {
        font-size: 11px;
        font-weight: 300;
        color: #fff;
        opacity: 0.75;
      }
    }

    h3 {
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
  }

  @media only screen and (min-width: 768px) {
    .thumbnail-container {
      width: 220px;
      height: 140px;
      margin-bottom: 12px;

      .bookmark-container {
        top: 16px;
        right: 16px;
      }
    }

    .content {
      gap: 5px;

      .info {
        gap: 8px;

        .circle {
          width: 3px;
          height: 3px;
        }

        .year {
          font-size: 13px;
        }

        .category-container {
          .category {
            font-size: 13px;
          }
        }

        .rating {
          font-size: 13px;
        }
      }

      h3 {
        font-size: 18px;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .thumbnail-container {
      width: 280px;
      height: 174px;
      margin-bottom: 16px;
    }
  }
`;

export default Card;
