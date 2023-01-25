import React from 'react'
import Link from 'next/link'

export default function addressPage() {
  return (
    <div style={{color:"white"}}>Hello World From Address page !
    <br/>
    <br/>
    <Link href="/name"> Go to Name page</Link>
    <br/>
    <Link href="./"> Go to Home page</Link>
    </div>
  )
}
