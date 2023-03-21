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

const Book = () => {
  const title = "Atomic Habits";
  const author = "James Clear";
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

/*
const Image = () => <img src="./images/book-1.jpg" alt="Atomic Habits" />;
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
};
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
