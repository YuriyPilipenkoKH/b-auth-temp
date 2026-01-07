"use client"
import Link from 'next/link'
import { useState } from 'react'



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

        {!anable ? (
            <h1 className="">Home</h1>
        ) : (
          <>
            <h1 className="h12">Home</h1>
            <span className="text-sm ml-2">🏠</span>
          </>
        )}
        <span className="text-accent">.</span>
      </div>
    </Link>
    {/* {anable && <AuthForm setAnable={setAnable}/>} */}
  </>
);
}

export default Logo