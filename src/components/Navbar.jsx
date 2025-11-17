import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 via-violet-500 to-sky-500 shadow-lg shadow-violet-500/30 grid place-items-center text-white">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
            Swaps
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#how" className="hover:text-neutral-900 transition-colors">How it works</a>
          <a href="#demo" className="hover:text-neutral-900 transition-colors">Demo</a>
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-xl shadow-md shadow-neutral-900/20"
        >
          Get the app
          <Menu className="md:hidden" size={16} />
        </motion.button>
      </div>
    </div>
  );
}
