import { motion } from 'framer-motion';

const steps = [
  { title: 'List your item', desc: 'Add photos and what you want in return.' },
  { title: 'Swipe & match', desc: 'Swipe right on items you like. Match when it’s mutual.' },
  { title: 'Chat & barter', desc: 'Message to agree on a win‑win trade.' },
  { title: 'Swap IRL or ship', desc: 'Meet locally or use shipping labels.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-extrabold text-neutral-900"
            >
              How Swaps works
            </motion.h2>
            <p className="mt-4 text-neutral-600 max-w-prose">
              Swaps turns bartering into a joyful game. Make matches, start chats, and trade the things you love.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-full bg-neutral-900 text-white grid place-items-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{s.title}</h3>
                    <p className="text-neutral-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
