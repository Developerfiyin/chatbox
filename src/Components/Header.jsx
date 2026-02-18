import React from 'react'
import { FaRocketchat } from "react-icons/fa";

const Header = () => {
  return (
    <main className='flex h-screen overflow-hidden bg-indigo-'>
         <aside className='bg-red-500 flex h-screen '>
            <FaRocketchat />

         </aside>


    </main>
  )
}

export default Header