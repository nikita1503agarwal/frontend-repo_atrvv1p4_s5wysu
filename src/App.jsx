import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <HowItWorks />

      <footer className="py-12 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Swaps — Trade playfully.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#features" className="hover:text-neutral-900">Features</a>
            <a href="#demo" className="hover:text-neutral-900">Demo</a>
            <a href="#how" className="hover:text-neutral-900">How it works</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
