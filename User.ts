// User.ts
import { Book } from "./Book";

// Tính chất Abstraction: Lớp người dùng là lớp trừu tượng
export class User {
    protected name: string; // Tính chất Encapsulation: Thuộc tính protected

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    // Phương thức để mượn sách
    public borrowBook(book: Book): string {
        return `${this.name} borrowed a book.`;
    }
}