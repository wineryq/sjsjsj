import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </main>
  )
}
