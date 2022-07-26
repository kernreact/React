import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// styles
import './assets/styles.scss';

// components
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import DinoSearch from './components/DinoSearch';
import DinoBrowse from './components/DinoBrowse';
import DinoDetails from './components/DinoDetails';
import Favourites from './components/Favourites';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/search" element={<DinoSearch />} />
          <Route path="/browse/:name" element={<DinoBrowse />} />
          <Route path="/browse" element={<DinoBrowse />} />
          <Route path="/dinos/:id" element={<DinoDetails />} />
          <Route path="/" exact element={<DinoSearch />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
};

export default App;