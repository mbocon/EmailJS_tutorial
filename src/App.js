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
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
            <li><a href="/link4">Link 4</a></li>
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
