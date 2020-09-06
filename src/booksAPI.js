import { url } from "./utilities/URL";
const { default: Axios } = require("axios");

function getBooks() {
  return Axios.get(url);
}

function getBook(id) {
  return Axios.get(url + id);
}
function createBook(book) {
  return Axios.post(url, book);
}
function updateBook(id, book) {
  return Axios.put(url + id, book);
}

function deleteBook(id) {
  return Axios.delete(url + id);
}

export { getBooks, getBook, createBook, updateBook, deleteBook };
