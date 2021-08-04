import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
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
        <p>All Rights Reverved &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
