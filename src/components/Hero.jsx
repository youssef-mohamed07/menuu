import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="ba.jpg"
          alt="Coffee Shop Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight"
        >
        صدفه
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl text-yellow-400 mb-4 md:mb-8 font-semibold"
        >
          تجربة مقهي لا مثيل لها
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          استمتع بأشهى الأطباق والمشروبات في مطعمنا، حيث تلتقي الأصالة بالحداثة. دع حواسك تنغمس في عالم من النكهات الغنية والأجواء الساحرة، واستمتع بتجربة طعام ومشروبات فريدة تعكس تميزنا واهتمامنا بأدق التفاصيل.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
        >
          <Link to={'/menu'} className="md:order-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-base md:text-lg"
            >
              استكشف القائمة
            </motion.button>
          </Link>
          <Link to={'/about'} className="md:order-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:text-gray-900 text-base md:text-lg"
            >
              نبذه عننا
            </motion.button>
          </Link>
        </motion.div>
      </div>
      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 opacity-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img src="bb.jpg" alt="Coffee Bean" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img src="bc.jpg" alt="Coffee Cup" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default HeroSection;