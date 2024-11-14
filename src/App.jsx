import React, { useRef } from 'react';
import down from './assets/down2.jpg'
import up from './assets/up.png'

function App() {
  const boxRef = useRef(null);

  const handleClick_1 = () => {
    boxRef.current.style.transform = 'translateY(-0px)'; 
  };

  const handleClick_2 = () => {
    boxRef.current.style.transform = 'translateY(-130px)'; 
  };

  const handleClick_3 = () => {
    boxRef.current.style.transform = 'translateY(-250px)'; 
  };

  const handleClick_4 = () => {
    boxRef.current.style.transform = 'translateY(-360px)'; 
  }
  const handleClick_5 = () => {
    boxRef.current.style.transform = 'translateY(-470px)';
  };

  const handleClick_6 = () => {
    boxRef.current.style.transform = 'translateY(-580px)';
  };


  const handleClick_7 = () => {
    boxRef.current.style.transform = 'translateY(-670px)'; 
  };

  return (
    <div className="max-w-[600px] flex mx-auto mt-10 mb-10">
     
      <div className="bg-red-500 w-1/2 h-[750px] flex items-end">
        <div
          className="w-20 h-20 bg-orange-500 mx-auto lift transition-transform duration-1000" 
          ref={boxRef}
          style={{ transition: 'transform 1.3s ease-in-out' }} 
        ></div>
      </div>

      
      <div className="bg-blue-500 w-1/2 h-[750px] flex flex-col justify-between">
        <div className='flex gap-2'>
          <div
            onClick={handleClick_7}
            className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white"
          >
            7
          </div>
          <img onClick={handleClick_7} className='w-7 rounded-full' src={down} alt="" />
        </div>

        <div className='flex gap-2 '>
          <div onClick={handleClick_6} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">6</div>
          <img onClick={handleClick_6} className='w-7 rounded-full' src={down} alt="" /> 
          <img onClick={handleClick_6} className='w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_5} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">5</div>
          <img onClick={handleClick_5} className='w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_5} className='w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_4} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">4</div>
          <img onClick={handleClick_4} className='w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_4} className='w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_3} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">3</div>
          <img onClick={handleClick_3} className='w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_3} className='w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2'>
          <div onClick={handleClick_2} className="cursor-pointer bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">2</div>
          <img onClick={handleClick_2} className='w-7 rounded-full' src={down} alt="" />
          <img onClick={handleClick_2} className='w-7 rounded-full' src={up} alt="" />
        </div>

        <div className='flex gap-2 items-center'>
          <div onClick={handleClick_1} className="cursor-pointer mb-9 bg-slate-600 w-7 flex items-center justify-center h-7 rounded-full text-white">1</div>
          <img onClick={handleClick_1} className='w-7 rounded-full mb-9' src={up} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
