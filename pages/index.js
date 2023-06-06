// import Image from 'next/image'
import { Inter } from 'next/font/google';
import Whether from './whetherApi';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <h2>hello</h2> */}
      <Whether/>
     
    </>
   
  )
}
