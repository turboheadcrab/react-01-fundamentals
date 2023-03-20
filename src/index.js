import ReactDOM from "react-dom/client";

const BookList = () => (
  <section>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
    alt="Atomic Habits"
  />
);
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => <h4>James Clear</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
