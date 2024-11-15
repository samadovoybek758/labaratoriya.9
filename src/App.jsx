import React, { useRef } from 'react';
import down from './assets/down2.jpg'
import up from './assets/up.png'

function App() {
  const boxRef = useRef(null);
  const numRef = useRef<HTMLSpanElement>(null)

  const handleClick_1 = () => {
    boxRef.current.style.transform = 'translateY(-0px)'; 
    boxRef.current.textContent = '1'
  };

  const handleClick_2 = () => {
    boxRef.current.style.transform = 'translateY(-130px)'; 
    boxRef.current.textContent = '2'
  };

  const handleClick_3 = () => {
    boxRef.current.style.transform = 'translateY(-250px)'; 
    boxRef.current.textContent = '3'
  };

  const handleClick_4 = () => {
    boxRef.current.style.transform = 'translateY(-360px)'; 
    boxRef.current.textContent = '4'
  }
  const handleClick_5 = () => {
    boxRef.current.style.transform = 'translateY(-470px)';
    boxRef.current.textContent = '5'
  };

  const handleClick_6 = () => {
    boxRef.current.style.transform = 'translateY(-580px)';
    boxRef.current.textContent = '6'
  };


  const handleClick_7 = () => {
    boxRef.current.style.transform = 'translateY(-670px)'; 
    boxRef.current.textContent = '7'
  };

  return (
    <div className="max-w-[600px] flex mx-auto mt-10 mb-10">
     
      <div className="bg-gray-600 w-1/2 h-[750px] flex items-end">
        <div
          className="w-16 h-20 bg-blue-500 mx-auto lift transition-transform text-white  flex justify-center" 
          ref={boxRef}
          style={{ transition: 'transform 3.3s ease-in-out ' }} 
        >1</div>
      </div>

      
      <div className="bg-green-900 w-1/2 h-[750px] flex flex-col justify-between">
        <div className='flex gap-2'>
          <div
            onClick={handleClick_7}
            className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white"
          >
            7
          </div>
          <img onClick={handleClick_7} className='cursor-pointer w-7 rounded-full' src={down} alt="" />
        </div>

        <div className='flex gap-2 '>
          <div onClick={handleClick_6} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">6</div>
          <img onClick={handleClick_6} className='cursor-pointer w-7 rounded-full' src={down} alt="" /> 
          <img onClick={handleClick_6} className='cursor-pointer w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_5} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">5</div>
          <img onClick={handleClick_5} className='cursor-pointer w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_5} className='cursor-pointer w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_4} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">4</div>
          <img onClick={handleClick_4} className='cursor-pointer w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_4} className='cursor-pointer w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_3} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">3</div>
          <img onClick={handleClick_3} className='cursor-pointer w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_3} className='cursor-pointer w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_2} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">2</div>
          <img onClick={handleClick_2} className='cursor-pointer w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_2} className='cursor-pointer w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2 items-center'>
          <div onClick={handleClick_1} className="cursor-pointer mb-9 bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">1</div>
          <img onClick={handleClick_1} className='cursor-pointer w-7 rounded-full mb-9' src={up} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
