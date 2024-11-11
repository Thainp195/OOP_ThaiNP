// Book.ts
// Tính chất Encapsulation: Đóng gói các thuộc tính của lớp
export class Book {
    private title: string;
    private author: string;
    private isbn: string;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Phương thức để lấy thông tin chi tiết của sách
    public getDetails(): string {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }

    // Phương thức để lấy tiêu đề sách
    public getTitle(): string {
        return this.title;
    }
}