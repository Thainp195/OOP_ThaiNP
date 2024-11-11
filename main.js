"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const Library_1 = require("./Library");
const Book_1 = require("./Book");
// Tạo đối tượng thư viện và thêm sách
const library = new Library_1.Library();
const book1 = new Book_1.Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789");
const book2 = new Book_1.Book("1984", "George Orwell", "987654321");
library.addBook(book1);
library.addBook(book2);
// In danh sách sách trong thư viện
console.log('Books in the library:\n' + library.listBooks());
// Tìm kiếm sách
console.log(library.findBook("1984")); // Tìm sách theo tên
// Xóa sách
console.log(library.removeBook("The Great Gatsby")); // Xóa sách
console.log('Books in the library after removal:\n' + library.listBooks());
