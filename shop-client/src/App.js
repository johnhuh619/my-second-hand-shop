import { Link, Route, Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { useState } from 'react';
import AboutPage from './page/about';
function App() {
  const [menu, setMenu] = useState(false);
  // 상단 navbar 감싼 div에 좌우 패딩
  // 클릭시 이벤트 발생
  // 어떤 데이터가 필요할까?
  // 관리자 모드에서 제품 업로드하는 구조
  return (
    <div>
      <Routes>
        <Route path='/' element={<div></div>}></Route>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
          {/* Menu Icon (Left) */}
          <button
            onClick={() => setMenu(!menu)}
            className='ml-48 text-gray-900'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/* POLYTERU Text (Center) */}
          <Link to='/' className='mx-auto text-xl font-bold'>
            H의 중고장터
          </Link>
          {/* Other Text (Right) */}
          <div className='mr-48 flex space-x-4'>
            <button className='text-gray-900'>Log In</button>
            <button className='text-gray-900'>Cart</button>
          </div>
          {/* Popup Menu */}
          {menu && (
            <div className='absolute top-14 left-0 ml-48 bg-white border p-4'>
              <nav>
                <Link to='/about' className='block mb-2 hover:text-gray-900'>
                  소개
                </Link>
                {/* <Link to='/shop' className='block mb-2 hover:text-gray-900'>
                    가게
                  </Link>
                  <Link
                    to='/arrival'
                    className='block mb-2 hover:text-gray-900'
                  >
                    입고예정
                  </Link>
                  <Link to='/cs' className='block hover:text-gray-900'>
                    연락처
                  </Link> */}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content and Footer */}
    </div>
  );
}

export default App;
