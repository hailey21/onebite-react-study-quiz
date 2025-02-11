import './App.css';
import './index.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import { getEmotionImage } from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 홈페이지
// 2. "/new" : 새로운 일기 작성
// 3. "/diary" : 일기 상세 조회
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/edit'}>Edit</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
