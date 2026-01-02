
 function AuthLayout(
  { children }: { children: React.ReactNode } 
 ) {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_AUTH_BG})`,
      }}
    >

        {children}
    </div>
  )
}

export default AuthLayout