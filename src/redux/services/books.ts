import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const googleKey = "AIzaSyBHaqRmLB8-IQh8QNy9kYJN617vYMc2N60";
const baseUrl = "https://www.googleapis.com/books/v1/";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<
      GetBooks,
      {
        name: string;
        startIndex?: number;
        maxResults?: number;
        orderBy?: string;
        category?: string;
      }
    >({
      query: ({
        name,
        startIndex = 0,
        maxResults = 30,
        orderBy = "relevance",
        category = "",
      }) => {
        const categoryValue = category === "all" ? "" : category;
        return {
          method: "GET",
          url: `volumes?q=${name}+subject:${categoryValue}&key=${googleKey}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`,
        };
      },
    }),
    getCurrentBook: builder.query<CurrentBookType, string>({
      query: (bookId) => {
        return {
          method: "GET",
          url: `volumes/${bookId}?key=${googleKey}`,
        };
      },
    }),
  }),
});

export const { useLazyGetBooksQuery, useGetCurrentBookQuery } = booksApi;

//current book response
export type CurrentBookType = {
  saleInfo: {
    buyLink: string;
    country: string;
    listPrice: { amount: number; currencyCode: string };
    saleability: string;
  };
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    dimensions: { height: string; width: string };
    imageLinks: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
    publishedDate: string;
    title: string;
    previewLink: string;
  };
};

//books response

export type BookItemInfo = {
  authors: string[];
  averageRating: number;
  categories: string[];
  description: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  pageCount: number;
  previewLink: string;
  publishedDate: string;
  title: string;
};

export type BookItem = {
  accessInfo: number;
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    listPrice: { amount: number; currencyCode: string };
  };
  searchInfo: { textSnippet: string };
  selfLink: string;
  volumeInfo: BookItemInfo;
};

export type GetBooks = {
  items: BookItem[];
  kind: string;
  totalItems: number;
};
