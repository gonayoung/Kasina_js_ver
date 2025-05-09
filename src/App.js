// src/App.js
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Mainslider from './components/Mainslider';
import Bestitem from './components/Bestitem';
import Highlight from './components/Highlights';
import Outfits from './components/Outfits';
import Launches from './components/Launches';
import Midslider from './components/Midslider';
import Discover from './components/Discover';
import Lores from './components/Lores';
import Wkndrs from './components/Wkndrs';
import Lockheedmartin from './components/Lockheedmartin';
import Miloarchive from './components/Miloarchive';
import Americanneedle from './components/Americanneedle';
import Archives from './components/Archives';

import Detail from './components/Detail';
import Detail2 from './components/Detail2';
import Footer from './components/Footer';
import Cart from './components/Cart'; //장바구니
import Login from './components/Login'; //로그인 화면
import Search from './components/Search'; //검색창
import Board from './components/Board'; //게시판

function DetailWrapper() {
  const { id } = useParams();
  const numericId = parseInt(id);
  const detail2Ids = [4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

  return detail2Ids.includes(numericId) ? <Detail2 /> : <Detail />;
}

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainslider />
              <Bestitem />
              <Highlight />
              <Outfits />
              <Launches />
              <Midslider />
              <Discover />
              <Lores />
              <Wkndrs />
              <Lockheedmartin />
              <Miloarchive />
              <Americanneedle />
              <Archives />
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailWrapper />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/board" element={<Board/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
