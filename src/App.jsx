import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { MainContainer } from './components/common/MainContainer';
import { Footer } from './components/common/Footer';
import { Home } from './components/pages/home/Home';
import { History } from './components/pages/history/History';
import { Work } from './components/pages/work/Work';
import { NotFound } from './components/pages/NotFound';

export const App = () => {
  return (
    // basenameにPUBLIC_URLを設定
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
}

