import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => <p>this is my message</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
