import Foother from '@/components/foother'
import Navbar from '@/components/navbar'


export default function Template({children}:Readonly<{children : React.ReactNode}>) {
  return (
    <div>
        <Navbar/>
        {children}
        <Foother/>
    </div>
  )
}
