import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Coffee, Heart, Star, MessageCircle, icons } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const AboutUs = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 p-4 sm:p-6 md:p-8 overflow-hidden relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-128 h-128 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-112 h-112 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          عنّا
        </motion.h2>
       
        <motion.div
          className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl text-yellow-800 leading-relaxed mb-8 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            صدفة
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl text-yellow-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            حب الصدفة هو ذلك الحب الذي يأتي مثل العاصفة دون ترتيب أو قصد منا، فيغير مشاعرنا وقلوبنا وحتى طريقة تفكيرنا.
            فحب الصدفة هو الوصف الدقيق للحب من النظرة الأولى، لأن الحب هو تلك المشاعر التي تأتي مثل الركلة في قلوبنا
            والتي بمثابة صدمة الإنعاش التي تجعلنا نحيا حياة أخرى.
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            className="text-2xl italic text-yellow-600 my-8 p-4 border-r-4 border-yellow-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            "الحب هو رحلة غير متوقعة تبدأ بالصدفة وتنتهي بالقدر."
          </motion.blockquote>

          {/* Cafe highlights */}
          <motion.div
            className="flex justify-center space-x-8 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <Coffee size={48} className="text-yellow-600 mb-2" />
              <p className="text-lg font-semibold">قهوة ممتازة</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart size={48} className="text-yellow-600 mb-2" />
              <p className="text-lg font-semibold">أجواءرائعة</p>
            </div>
            <div className="flex flex-col items-center">
              <Star size={48} className="text-yellow-600 mb-2" />
              <p className="text-lg font-semibold">خدمة متميزة</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-20 left-20 text-8xl text-yellow-500 opacity-50"
          animate={{
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          ♥
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-8xl text-yellow-500 opacity-50"
          animate={{
            rotate: [0, -10, 0, 10, 0],
            scale: [1, 0.9, 1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          ♥
        </motion.div>
      </div>

      {/* Fixed WhatsApp Icon */}
      <motion.a
        href="https://wa.me/+966564366276?text=مرحبا"
        className="fixed right-6 bottom-24 inline-flex items-center justify-center p-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowInfo(true)}
      >
        <FaWhatsapp size={28} color="white" />
      </motion.a>

      {/* Info Tooltip */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="fixed bottom-36 right-6 bg-white text-black p-4 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg">Contact us via WhatsApp for more information or inquiries.</p>
            <button
              className="mt-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              onClick={() => setShowInfo(false)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
     
    </section>
  );
};

export default AboutUs;
