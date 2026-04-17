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
    <section className="py-20 px-6 bg-[#e6e6e6] font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full aspect-square overflow-hidden rounded-[14px] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover block"
              />
              {/* Dark Overlay (always visible) */}
              <div className="absolute inset-0 bg-black/35 z-10" />
              
              {/* Content Center */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4 text-white">
                <h3 className="text-[22px] font-medium m-0">{item.name}</h3>
                <div className="w-[40px] h-[1px] bg-white my-2 opacity-70" />
                <p className="text-sm opacity-80 m-0">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

