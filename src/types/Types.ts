import React, { SetStateAction } from "react";

export type TContext = {
  dark: boolean;
  searchTerm: string;
  setOrderBy: React.Dispatch<SetStateAction<string>>;
  orderBy: string;

  setDark: React.Dispatch<SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
};
export interface IParams {
  title: string;
}

export interface IDetailGame {
  item: {
    added: number;
    added_by_status: {
      beaten: number;
      dropped: number;
      owned: number;
      playing: number;
      toplay: number;
      yet: number;
    };
    background_image: string;
    creators_count: number;
    description: string;
    developers: [TDevelopers];
    genres: [TGenre];
    metacritic: number;
    name: string;
    name_original: string;
    playtime: number;
    esrb_rating: {
      name: string;
      slug: string;
      id: number;
    };
    ratings: [TRatings];
    ratings_count: number;
    released: string;
    tags: [TTags];
    website: string;
    publishers: [TDevelopers];
    platforms: [TPlatform];
  };
}

export type TDevelopers = {
  id: number;
  name: string;
  slug: string;
};

export type TPlatform = {
  platform: {
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
  released_at: string;
};
export interface IPlatform {
  platform: {
    platform: {
      games_count: number;
      id: number;
      image_background: string;
      name: string;
      slug: string;
    };
    released_at: string;
  };
}

export type TRatings = {
  title: string;
  count: number;
  id: number;
  percent: number;
};

export type TGenre = {
  id: number;
  name: string;
  slug: string;
};
export type TResult = {
  id: number;
  added: number;
  background_image: string;
  added_by_status: {
    beaten: number;
    dropped: number;
    owned: number;
    playing: number;
    toplay: number;
    yet: number;
  };
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  name: string;
  metacritic: number;
  genres: [TGenre];
  playtime: number;
  rating: number;
  rating_top: number;
  released: string;
  platforms: [TPlatform];
  ratings: [TRatings];
  ratings_count: number;
  reviews_count: number;
  reviews_text_count: number;
  short_screenshots: [TScreenshot];
  slug: string;
  suggestions_count: number;
  updated: string;
  tags: [TTags];
  stores: [TStore];
};

export interface IResult {
  item: {
    id: number;
    added: number;
    background_image: string;
    added_by_status: {
      beaten: number;
      dropped: number;
      owned: number;
      playing: number;
      toplay: number;
      yet: number;
    };
    esrb_rating: {
      id: number;
      name: string;
      slug: string;
    };
    name: string;
    metacritic: number;
    genres: [TGenre];
    playtime: number;
    rating: number;
    rating_top: number;
    platforms: [TPlatform];
    ratings: [TRatings];
    ratings_count: number;
    released: string;
    reviews_count: number;
    reviews_text_count: number;
    short_screenshots: [TScreenshot];
    slug: string;
    suggestions_count: number;
    updated: string;
    tags: [TTags];
    stores: [TStore];
  };
}

export interface IGenre {
  genre: {
    id: number;
    slug: string;
    name: string;
  };
}

export type TStore = {
  id: number;
  store: {
    domain: string;
    games_count: number;
    image_background: string;
    name: string;
    slug: string;
  };
};
export type TTags = {
  name: string;
  slug: string;
  image_background: string;
  id: number;
  games_count: number;
  language: string;
};

export type TScreenshot = {
  image: string;
};
