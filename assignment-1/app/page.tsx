import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>Hello world</div>

    <Link href={'About'}>About</Link><br/>
    <Link href={'Contact'}>Contact</Link><br/>
    <Link href={'Services'}>Services</Link>
    </>
  )
}

export default page