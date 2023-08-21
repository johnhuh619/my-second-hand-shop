import logo from './logo.svg';
import { useState } from 'react';
function App() {
  const [menu, setMenu] = useState(false);
  // 상단 navbar 감싼 div에 좌우 패딩
  // 클릭시 이벤트 발생
  // 어떤 데이터가 필요할까?
  // 관리자 모드에서 제품 업로드하는 구조
  return (
    <div>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
          {/* Menu Icon (Left) */}
          <button onClick={() => setMenu(!menu)} className='text-gray-900'>
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
          <a href='/' className='text-xl font-bold mx-auto'>
            H's 중고장터
          </a>
          {/* Other Text (Right) */}
          <div className='flex space-x-4'>
            <button className='text-gray-900'>Log In</button>
            <button className='text-gray-900'>Cart</button>
          </div>
          {/* Popup Menu */}
          {menu && (
            <div className='absolute bg-white border p-4'>
              <nav>
                <a href='/about' className='block mb-2 hover:text-gray-900'>
                  소개
                </a>
                <a href='/items-all' className='block mb-2 hover:text-gray-900'>
                  가게
                </a>
                <a href='/archive' className='block mb-2 hover:text-gray-900'>
                  아카이브
                </a>
                <a href='/cscenter' className='block hover:text-gray-900'>
                  고객센터
                </a>
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
