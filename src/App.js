import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
// Redux imports
import { store, persistor } from './redux/store';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <div className='App px-5'>
            <Routes><Route exact path='/' element={<Login/>} /> <Route exact path='/register' element={<Register/>} /> </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
