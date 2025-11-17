import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const sampleItems = [
  {
    id: 1,
    title: 'Vintage Polaroid Camera',
    want: 'Film rolls or headphones',
    img: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Skateboard Deck',
    want: 'Streetwear hoodie',
    img: 'https://images.unsplash.com/photo-1508170754725-6c1f1fd4e4d2?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Mechanical Keyboard',
    want: 'Desk mat or keycaps',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2080&auto=format&fit=crop'
  }
];

export default function Demo() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  const item = sampleItems[index % sampleItems.length];

  const swipe = (dir) => {
    if (dir === 'right') setLiked((l) => [...l, item]);
    setIndex((i) => i + 1);
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">Try the swipe demo</h2>
            <p className="mt-3 text-neutral-600">Swipe right to like, left to skip. See how matching items feels instantly rewarding.</p>

            <div className="mt-6 flex gap-3 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Swipe right to like</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-neutral-900" /> Swipe left to skip</span>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              Likes: {liked.length}
            </div>
          </div>
          <div className="relative h-[420px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-50 to-neutral-100 border border-neutral-200" />
            <div className="absolute inset-3 rounded-2xl overflow-hidden bg-white shadow-xl border border-neutral-100">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20, rotate: -6 }}
                  transition={{ duration: 0.35 }}
                  className="h-full w-full"
                >
                  <div
                    className="h-3/5 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="h-2/5 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-600">Wants: {item.want}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => swipe('left')}
                        className="h-12 w-12 grid place-items-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                        aria-label="Skip"
                      >
                        <X />
                      </button>
                      <button
                        onClick={() => swipe('right')}
                        className="h-12 w-12 grid place-items-center rounded-full bg-rose-500 text-white shadow hover:bg-rose-600 transition-colors"
                        aria-label="Like"
                      >
                        <Heart />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
