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
            <h1 className="">Portfolio</h1>
        ) : (
          <>
            <h1 className="h12">Home</h1>
            <h1 className="h10">Pf</h1> {/* Always show 'Pf' when anable is true */}
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