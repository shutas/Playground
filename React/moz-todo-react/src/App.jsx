import './App.css'

function App(props) {
  return (
    <>
      <header>
        <h1>{props.greeting}, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}

export default App
