import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './layout/Layout';
import Main from './pages/Main';
import FuneralMap from './layout/FuneralMap';
import FuneralRecommend from './pages/FuneralRecommend';
import FuneralArea from './pages/FuneralArea';

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/map' element={<FuneralMap />} />
          <Route path='/recommend' element={<FuneralRecommend />} />
          <Route path='/area' element={<FuneralArea />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
