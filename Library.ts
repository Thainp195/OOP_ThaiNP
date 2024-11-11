// Library.ts
import { Book } from "./Book";
import { User } from "./User";

// Tính chất Abstraction: Thư viện quản lý các sách và người dùng
export class Library {
    private books: Book[] = []; // Danh sách sách
    private users: User[] = []; // Danh sách người dùng

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public removeBook(title: string): string {
        const index = this.books.findIndex(book => book.getTitle() === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            return `${title} has been removed from the library.`;
        } else {
            return `Book not found: ${title}`;
        }
    }

    public registerUser(user: User): void {
        this.users.push(user);
    }

    public listBooks(): string {
        return this.books.map(book => book.getDetails()).join('\n');
    }

    public findBook(title: string): string {
        const book = this.books.find(book => book.getTitle() === title);
        return book ? book.getDetails() : `Book not found: ${title}`;
    }
}