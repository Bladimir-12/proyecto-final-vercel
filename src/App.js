import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import { Login } from './auth/Login';
import { Logout } from './auth/Logout';
import { Link, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import './App.css';



function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <nav className="navbar">
              <Link to='/favorites' className="navbar-link">Favoritos</Link>
              <Link to='/home' className="navbar-link">Home</Link>
              <Link to='/logout' className="navbar-link">Logout</Link>
            </nav>
            <h1 className="h1">Busca a una Celebridad</h1>
           
          </>
        ) : (
          <Login />
        )}
      </header>

      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<SearchBar />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
