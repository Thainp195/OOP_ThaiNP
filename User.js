"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// Tính chất Abstraction: Lớp người dùng là lớp trừu tượng
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // Phương thức để mượn sách
    borrowBook(book) {
        return `${this.name} borrowed a book.`;
    }
}
exports.User = User;
