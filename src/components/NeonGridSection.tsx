import { motion } from "framer-motion";

const items = [
  { name: "Diligord", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?1" },
  { name: "Rocogged", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?2" },
  { name: "Strizzes", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?3" },
  { name: "Clossyo", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?4" },
  { name: "Rendann", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?5" },
  { name: "Reflupper", desc: "Lorem ipsum", img: "https://picsum.photos/400/400?6" },
];

export function NeonGridSection() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center text-center p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <h3 className="text-white text-xl font-bold m-0 uppercase tracking-wider">{item.name}</h3>
                <p className="text-white/80 text-sm mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
