'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const router = useRouter();

  const handleViz = () => {
    router.push('/tableau');
  };

  return (
    <section className="relative min-h-[calc(100vh-(var(--header-height)))] flex flex-col justify-center items-center ">
      <motion.h1
        animate={{ y: 0 }}
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-6xl w-1/2 font-bold text-center text-slate-400"
      >
        Hacemos Desarrollo Web
        <span className="text-myGrayDark">
          <br /> a la medida
        </span>
        <h2 className="text-xl">Pagina en Construcción</h2>
        <button
          className="px-4 py-2 bg-slate-500 text-base text-red-400"
          onClick={handleViz}
        >
          Ver Dashboard
        </button>
      </motion.h1>
    </section>
  );
};
