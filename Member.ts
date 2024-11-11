// Member.ts
import { User } from "./User";
import { Book } from "./Book";

// Tính chất Inheritance: Lớp Member kế thừa từ lớp User
export class Member extends User {
    // Tính chất Polymorphism: Ghi đè phương thức borrowBook
    public borrowBook(book: Book): string {
        return `${this.name} borrowed the book: ${book.getDetails()}`;
    }
}