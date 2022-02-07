import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { MainContainer } from './components/common/MainContainer';
import { Footer } from './components/common/Footer';
import { Home } from './components/pages/home/Home';
import { History } from './components/pages/history/History';
import { Work } from './components/pages/work/Work';
import { NotFound } from './components/pages/NotFound';

const routes = [
  { name: 'Home', path: '/', element: <Home /> },
  { name: 'History', path: '/history', element: <History /> },
  { name: 'Work', path: '/work', element: <Work /> },
  { name: 'NotFound', path: '*', element: <NotFound /> }
]

export const App = () => {
  return (

    // basenameにPUBLIC_URLを設定
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* 配列の最後の要素を除いてHeaderへ渡す（NotFoundは使わないため） */}
      <Header routes={routes.slice(0, -1)} />
      <MainContainer>
        <Routes>
          {
            routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
}

