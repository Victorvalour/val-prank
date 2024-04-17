import React, { useEffect, useState } from 'react'
import wave from '../assets/wave.svg'
import yujia from '../images/yujia.jpg'
import hearts from '../images/hearts.gif'
import bigHeart from '../images/big-heart.gif'
import angry from '../images/angry.gif'


const Homepage = () => {

const [yesNo, setYesNo] = useState('noAnswer')



const handleNo = () => {
  setYesNo('no')
} 

const handleYes = () => {
  setYesNo('yes')
}



  setTimeout(() => {
  setYesNo('noAnswer')
}, 5000) 
 



  return (
    <div className='h-screen w-full bg-[#AC52B8] flex flex-col'>

<img src={hearts} alt="" className='w-[200px] opacity-50 absolute bottom-0 right-0'/>

<img src={hearts} alt="" className='w-[200px] opacity-50 absolute bottom-0'/>
<img src={hearts} alt="" className='w-[200px] opacity-50 absolute bottom-[200px] right-0'/>

<img src={hearts} alt="" className='w-[200px] opacity-50 absolute bottom-[200px]'/>


<div className='bg-gray-200 w-[80%] mx-auto mt-16 z-10'>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#291429] dark:border-gray-700">

  <div>
  {yesNo === 'noAnswer' ?
   (
  <div>
    <a href="#">
        <img class="rounded-t-lg" src={yujia} alt="" className='h-[300px] w-full' />
    </a>
    <div class="p-5">
      <p className='mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white'>于嘉</p>
        <a href="#">
            <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">你会是我的女朋友吗？</h5>
        </a>
       
        </div>
        </div>
      ) : yesNo === 'yes' ? (

      <div>
    <a href="#">
        <img class="rounded-t-lg" src={bigHeart} alt="" className='h-[300px] w-full' />
    </a>
    <div class="p-5">
      <p className='mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white'>哇，太好了</p>
        <a href="#">
            <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">我爱你</h5>
        </a>
       
        </div>
        </div>
      ) :    (

        <div>
      <a href="#">
          <img class="rounded-t-lg" src={angry} alt="" className='h-[300px] w-full' />
      </a>
      <div class="p-5">
        <p className='mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white'>错误的答案。</p>
          <a href="#">
              <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">再试一次</h5>
          </a>
         
          </div>
          </div>
        )

  }
  </div>
        <div className='flex justify-between px-5 pb-4'>
        <a onClick={handleNo} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        不
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a onClick={handleYes} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-600">
        是的
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
    
</div>

</div>
      <img src={wave} alt="" className='absolute bottom-0 '/>

      {/* Answer Modal  */}

    

    </div>
  )
}

export default Homepage