import Navbar from './navbar'
import Footer from './footer'
import TopButton from './topbutton'
 
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        <TopButton />
      </main>
      <Footer />
    </div>
  )
}