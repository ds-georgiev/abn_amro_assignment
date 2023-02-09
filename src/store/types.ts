export type Slider = {
  tvShows: TVShow[];
  title: string;
};
export type Tile = {
  image?: string;
  title: string;
};

export type CastMember = {
  id: number;
  name: string;
  image?: string;
  character: string;
};

export type TVShow = {
  id?: number;
  title: string;
  image?: string;
  url?: string;
  genres?: string[];
  rating: number;
};

export type TVShowDetails = TVShow & {
  language: string;
  summary: string;
  cast?: CastMember[];
};
