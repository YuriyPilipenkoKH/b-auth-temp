import Header from "@/components/header/Header"


async function SiteLayout(
  { children }: { children: React.ReactNode }
) {
  return (  
  <div
      className="min-h-screen  bg-cover bg-center"
      style={{
      backgroundImage: `url(${process.env.NEXT_PUBLIC_DASHBOARD_BG})`,
      }}
    >
       <Header/>
    {children}
  </div>
  )
}
export default SiteLayout