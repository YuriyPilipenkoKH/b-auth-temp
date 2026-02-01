
 async function HomeLayout(
  { children }: { children: React.ReactNode } 
 ) {


  return (
    <div
      className="min-h-screen  bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_HOME_BG})`,
      }}
    >
    {/* <Header/> */}
        {children}
    </div>
  )
}

export default HomeLayout