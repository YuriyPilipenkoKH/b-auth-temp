import Link from "next/link"



const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-primary '>
      <div className="container mx-auto flex justify-between items-center">
        {/* <Logo/> */}
        <div className='hidden xl:flex items-center gap-8 '>
          {/* <Nav/> */}
          <Link href={'/contact'}  >
            <button className='cursor-pointer ' >
              Hire me
            </button>
          </Link>
        </div>
        <div className="xl:hidden">
          {/* <MobileNav/> */}
        </div>
      </div>
    </header>
  )
}

export default Header 