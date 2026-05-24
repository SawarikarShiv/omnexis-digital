import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
