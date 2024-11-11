"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
// Tính chất Abstraction: Thư viện quản lý các sách và người dùng
class Library {
    constructor() {
        this.books = []; // Danh sách sách
        this.users = []; // Danh sách người dùng
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        const index = this.books.findIndex(book => book.getTitle() === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            return `${title} has been removed from the library.`;
        }
        else {
            return `Book not found: ${title}`;
        }
    }
    registerUser(user) {
        this.users.push(user);
    }
    listBooks() {
        return this.books.map(book => book.getDetails()).join('\n');
    }
    findBook(title) {
        const book = this.books.find(book => book.getTitle() === title);
        return book ? book.getDetails() : `Book not found: ${title}`;
    }
}
exports.Library = Library;
