// Librarian.ts
import { User } from "./User";
import { Book } from "./Book";

// Tính chất Inheritance: Lớp Librarian kế thừa từ lớp User
export class Librarian extends User {
    public manageBooks(): string {
        return `${this.name} manages the library books.`;
    }

    // Tính chất Polymorphism: Ghi đè phương thức borrowBook
    public borrowBook(book: Book): string {
        return `${this.name} borrowed the book: ${book.getDetails()}`;
    }
}