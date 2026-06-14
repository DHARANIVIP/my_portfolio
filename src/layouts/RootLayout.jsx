import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { ScrollToTop } from '../components/ScrollToTop'
import { StarBackground } from '../components/StarBackground'
import { FloatingDock } from '../components/FloatingDock'


export function RootLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="app-shell">

      {!isHomePage && <StarBackground />}
      {isHomePage && <AnimatedBackground />}
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FloatingDock />
      <Footer />
    </div>
  )
}







