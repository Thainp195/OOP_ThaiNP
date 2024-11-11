"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
// Book.ts
// Tính chất Encapsulation: Đóng gói các thuộc tính của lớp
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    // Phương thức để lấy thông tin chi tiết của sách
    getDetails() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }
    // Phương thức để lấy tiêu đề sách
    getTitle() {
        return this.title;
    }
}
exports.Book = Book;
