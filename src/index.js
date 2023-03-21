import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => <img src="./images/book-1.jpg" alt="Atomic Habits" />;
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => <h4>James Clear</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
