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
    <EventExamples />
    {books.map((book) => (
      <Book {...book} key={book.id} />
    ))}
  </section>
);

const EventExamples = () => (
  <section>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted");
      }}
    >
      <h2>Typical Form</h2>
      <input
        type="text"
        name="example"
        onChange={(e) => {
          console.log(e);
          // e.target - element
          console.log(`Input Name : ${e.target.name}`);
          console.log(`Input Value : ${e.target.value}`);
          // console.log('handle form input');
        }}
        style={{ margin: "1rem 0" }}
      />
      <button type="submit">submit</button>
      <div>
        <button onClick={() => alert("handle button click")}>click me</button>
      </div>
    </form>
  </section>
);

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
