import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81bGKUa1e0L.jpg",
};

const secondBook = {
  author: "Karl Marx",
  title: "Das Kapital",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41mfCeuOk1L.jpg",
};

const BookList = () => (
  <section className="booklist">
    <Book
      author={firstBook.author}
      title={firstBook.title}
      img={firstBook.img}
    />
    <Book
      author={secondBook.author}
      title={secondBook.title}
      img={secondBook.img}
    />
  </section>
);

const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
