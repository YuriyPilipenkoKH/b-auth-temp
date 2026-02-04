
import Logo from "./Logo"



const Header = () => {
  return (
    <header className='py-12 xl:py-12 text-white bg-primary '>
      <div className="container mx-auto flex  items-center gap-12">
        <Logo />
        <div className='hidden xl:flex items-center gap-8 '>
          {/* <Nav/> */}
          {/* <Link href={'/contact'}  >
            <button className='cursor-pointer ' >
              Hire me
            </button>
          </Link> */}
        </div>

      </div>
    </header>
  )
}

export default Header 