import ReactDOM from "react-dom/client";
import Book from "./Book";

import "./index.css";
import books from "./books";

const BookList = () => (
  <section className="booklist">
    {books.map((book) => (
      <Book {...book} key={book.id} />
    ))}
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
