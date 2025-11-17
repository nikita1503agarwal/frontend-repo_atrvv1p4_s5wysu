import { motion } from 'framer-motion';
import { Hand, ShieldCheck, Gift, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Swipe to Match',
    desc: 'Discover items nearby and swipe to like. Match when it’s mutual—then start bartering.'
  },
  {
    icon: Gift,
    title: 'List in Seconds',
    desc: 'Snap photos, set your preferences, and go live. It’s fast, friendly, and fun.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    desc: 'Verified profiles, ratings and secure chat keep your trades smooth and safe.'
  },
  {
    icon: ThumbsUp,
    title: 'Win-Win Deals',
    desc: 'No cash? No problem. Trade what you have for what you want.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold text-neutral-900 text-center"
        >
          Trade made playful
        </motion.h2>
        <p className="mt-4 text-neutral-600 text-center max-w-2xl mx-auto">
          Gamified swiping, delightful animations, and a community-first vibe.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-violet-500 to-sky-500 text-white grid place-items-center shadow-md">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
