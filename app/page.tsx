"use client";

//npm run devimport Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router =useRouter();
  return (
          <div style={{color:"white"}}>Hello World From Es Jay ! Home Page
          <br/>
          <br/>
          <Link href="/name"> Go to Name page</Link>
          <br/>
          <Link href="/name/address"> Go to Address page</Link>
<br/>
<br/>
<Link href="/designation"> Go to designation page</Link>


<br/>
<br/>
<button type="button" onClick={()=>router.push("/name/address")}>Go to Address</button>
          </div>
          )
}