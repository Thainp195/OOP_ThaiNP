"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
// Member.ts
const User_1 = require("./User");
// Tính chất Inheritance: Lớp Member kế thừa từ lớp User
class Member extends User_1.User {
    // Tính chất Polymorphism: Ghi đè phương thức borrowBook
    borrowBook(book) {
        return `${this.name} borrowed the book: ${book.getDetails()}`;
    }
}
exports.Member = Member;
