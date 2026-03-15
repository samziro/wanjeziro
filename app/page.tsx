import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Framework from '@/components/Framework'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Framework />
      <Services />
      <Work />
      <Insights />
      <Contact />
      <Footer />

      {/* Floating widgets */}
      <WhatsAppButton />
      <Chatbot />
    </main>
  )
}
