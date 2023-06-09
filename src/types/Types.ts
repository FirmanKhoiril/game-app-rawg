import React, { SetStateAction } from "react";

export type TContext = {
  page: number;
  dark: boolean;
  searchTerm: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setDark: React.Dispatch<SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
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

export type TData = {
  count: number;
  next: string;
  previous: string;
  results: [];
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
  playtime: number;
  rating: number;
  rating_top: number;
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
    playtime: number;
    rating: number;
    rating_top: number;
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
