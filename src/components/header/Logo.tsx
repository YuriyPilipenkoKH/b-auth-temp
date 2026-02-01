"use client"
import Link from 'next/link'
import { useState } from 'react'
import NavForm from '../forms/NavForm'



const Logo = () => {
const [anable, setAnable] = useState<boolean>(false)
const rclick = (event: React.MouseEvent) => {
  event.preventDefault(); // Prevents the default right-click menu
  setAnable(!anable);
  };

return (
  <>
    <Link href={"/"} onContextMenu={rclick}>
      <div className="flex items-baseline text-4xl font-semibold">

      
            <h1 className="">Home</h1>
   
        {/* <span className="text-accent">.</span> */}
      </div>
    </Link>
    {anable && <NavForm setAnable={setAnable}/>}
  </>
);
}

export default Logo