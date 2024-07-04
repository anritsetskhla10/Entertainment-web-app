
export type Thumbnail = {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
};

export type MediaItem = {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};



export type TData = {
  title: string;
  thumbnail: {
      trending?: {
          small: string;
          large: string;
      };
      regular: {
          small: string;
          medium: string;
          large: string;
      };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

  export type MediaListProps = {
    data: TData[];
    setDataInfo: React.Dispatch<React.SetStateAction<TData[]>>;
    changeInput:boolean;
    setChangeInput:React.Dispatch<React.SetStateAction<boolean>>;
};