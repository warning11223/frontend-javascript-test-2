import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = "AIzaSyBHaqRmLB8-IQh8QNy9kYJN617vYMc2N60";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
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
        category = "all",
      }) => {
        return {
          method: "GET",
          url: `volumes?q=${name}&key=${key}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`,
        };
      },
    }),
  }),
});

export const { useLazyGetBooksQuery } = booksApi;

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
