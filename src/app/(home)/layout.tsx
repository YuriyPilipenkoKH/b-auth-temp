

 async function HomeLayout(
  { children }: { children: React.ReactNode } 
 ) {


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_HOME_BG})`,
      }}
    >

        {children}
    </div>
  )
}

export default HomeLayout