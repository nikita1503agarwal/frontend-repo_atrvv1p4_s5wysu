import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900">
            Swap. Match. Barter.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700">
            Swaps is a playful marketplace where you trade items by swiping right to match. Turn what you have into what you want, no cash required.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-neutral-900 text-white shadow-lg shadow-neutral-900/20"
            >
              Try the demo
            </motion.a>
            <motion.a
              href="#how"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-white text-neutral-900 border border-neutral-200 shadow-sm"
            >
              How it works
            </motion.a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              No fees. Just trades.
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Safe & verified profiles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
