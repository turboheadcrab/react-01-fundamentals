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

const BookList = () => {
  const getBook = (id) => {
    const foundBook = books.find((book) => book.id === id);
    console.log(foundBook);
  };
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} getBook={getBook} />
      ))}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
