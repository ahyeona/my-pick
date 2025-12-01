export interface CreateMypickDTO {
  user_id: number;
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    genre_ids: number[];
    adult: boolean;
    original_language: string;
    original_title: string;
  };
  is_watched: boolean;
  memo: string;
}

// export interface UpdateMypickDTO {

// }