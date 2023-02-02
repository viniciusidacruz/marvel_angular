export interface IUrls {
  type: string;
  url: string;
}

export interface ITems {
  resourceURI: string;
  name: string;
}

export interface IContentHeroes {
  available: number;
  collectionURI: string;
  items: ITems[];
  returned: number;
}

export interface IResult {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: IContentHeroes;
  series: IContentHeroes;
  stories: IContentHeroes;
  events: IContentHeroes;
  urls: IUrls[];
}

export interface IData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IResult[];
}

export interface IResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  etag: string;
  status: string;
  data: IData;
}
