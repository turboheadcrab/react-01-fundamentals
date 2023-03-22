import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81bGKUa1e0L.jpg",
    id: 1,
  },
  {
    author: "Karl Marx",
    title: "Das Kapital",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41mfCeuOk1L.jpg",
    id: 2,
  },
];

const BookList = () => (
  <section className="booklist">
    {books.map((book) => (
      <Book {...book} key={book.id} />
    ))}
  </section>
);

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
