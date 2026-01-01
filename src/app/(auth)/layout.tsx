
 function AuthLayout(
  { children }: { children: React.ReactNode } 
 ) {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwdkw1a4j/image/upload/v1767283634/b-auth-temp/img/nrurpajrd1ivzf9i7unj.jpg')",
      }}
    >
      {/* <div className='absolute top-[1rem] left-[1rem]'> */}
      {/* </div> */}
        {children}
    </div>
  )
}

export default AuthLayout