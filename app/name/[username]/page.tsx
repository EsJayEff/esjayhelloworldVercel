import React from 'react'
import Link from 'next/link'

export default function UserName({ params }: {
    params: { username: string },
    
  }) {
    
      return (
        <div style={{color:"white"}}>
              My name is {params.username}.
              <br/>
              <br/>
              <Link href="./"> Go to Home page</Link>
        </div>
      )
    }