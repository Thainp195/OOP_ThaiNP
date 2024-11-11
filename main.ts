// main.ts
import { Library } from "./Library";
import { Book } from "./Book";
import { Member } from "./Member";
import { Librarian } from "./Librarian";

// Tạo đối tượng thư viện và thêm sách
const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789");
const book2 = new Book("1984", "George Orwell", "987654321");

library.addBook(book1);
library.addBook(book2);

// In danh sách sách trong thư viện
console.log('Books in the library:\n' + library.listBooks());

// Tìm kiếm sách
console.log(library.findBook("1984")); // Tìm sách theo tên

// Xóa sách
console.log(library.removeBook("The Great Gatsby")); // Xóa sách
console.log('Books in the library after removal:\n' + library.listBooks());