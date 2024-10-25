import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>This is Service page</div>
    <Link href={'Services/WebSev'}>Web Dev</Link><br/>
    <Link href={'Services/AppDev'}>App Dev</Link>
    </>
  )
}

export default page