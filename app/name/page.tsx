import React from 'react'
import Link from 'next/link'

export default function namePage() {
  return (
    <div style={{color:"white"}}>Hello World From Name page !
    <br/>
    <br/>
    <Link href="/name/address"> Go to Address page</Link>
    <br/>
    <Link href="./"> Go to Home page</Link>
    </div>
  )
}