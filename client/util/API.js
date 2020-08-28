import axios from "axios";
require("dotenv").config();

export default {
  getGoogleBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  getGoogleBookById: (bookId) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  },
  getSavedBooks: () => {
    return axios.get("/api/saved");
  },
  removeSavedBook: (id) => {
    return axios.delete("/api/saved" + id);
  },
};
