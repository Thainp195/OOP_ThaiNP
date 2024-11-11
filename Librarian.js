"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
// Librarian.ts
const User_1 = require("./User");
// Tính chất Inheritance: Lớp Librarian kế thừa từ lớp User
class Librarian extends User_1.User {
    manageBooks() {
        return `${this.name} manages the library books.`;
    }
    // Tính chất Polymorphism: Ghi đè phương thức borrowBook
    borrowBook(book) {
        return `${this.name} borrowed the book: ${book.getDetails()}`;
    }
}
exports.Librarian = Librarian;
