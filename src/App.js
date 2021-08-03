import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  let year = new Date();
  year = year.getFullYear();

  return (
    <div className="App">
      <header>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/home">About</a></li>
          <li><a href="/home">Projects</a></li>
        </ul>
      </nav>
      </header>
      
      <main>
        <ContactForm />
      </main>
      <footer>
        <p>All Rights Reverved &copy; {year}</p>
      </footer>
    </div>
  );
}

export default App;
