import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react'; // Ensure these icons are imported correctly
import { FaSpinner } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
const menuCategories = [
  {
    name: 'المشروبات الساخنة',
    items: [
      { name: 'لاتيه', price: '17SR', image: 's1.jpeg' },
      { name: 'موكا', price: '20SR', image: 's2.jpeg' },
      { name: 'كابتشينو', price: '16SR', image: 's3.jpeg' },
      { name: 'كرتادو', price: '18SR', image: 's4.jpeg' },
      { name: 'فلات وايت', price: '14SR', image: 's5.jpeg' },
      { name: 'ميكاتو', price: '12SR', image: 's6.jpeg' },
      { name: 'هوت تشوكلت', price: '15SR', image: 's7.jpeg' },
      { name: 'قهوه تركي', price: '14SR', image: 's8.jpeg' },
      { name: 'قهوة فرنسية', price: '14SR', image: 's9.jpeg' },
      { name: 'قهوة امريكيه', price: '11SR', image: 's10.jpeg' },
      { name: 'امريكانو', price: '11SR', image: 's11.jpeg' },
      { name: 'هوت سبانش لاتيه', price: '18SR', image: 's12.jpeg' },
      { name: 'كوفي توفي', price: '18SR', image: 's13.jpeg' },
      { name: 'اسبريسو', price: '8SR', image: 's14.jpeg' },
      { name: 'اسبريسو دبل شوت', price: '12SR', image: 's15.jpeg' },
      { name: 'قهوه تركي بالحليب', price: '18SR', image: 's16.jpeg' },
      { name: 'هوت بلاك كوفي', price: '15SR', image: 's17.jpeg' },
      { name: 'كراميل لاتيه', price: '18SR', image: 's18.jpeg' },
      { name:'بستاشيو لاتيه حار ', price: '20SR', image: 's19.jpeg' },
      { name: 'وايت موكه', price: '18SR', image: 's20.jpeg' },
      { name: 'بندق لاتيه', price: '20SR', image: 's21.jpeg' },
      { name: 'كراميل ميكاتو', price: '18SR', image: 's22.jpeg' },
    ]
  }
  ,
  {
    name: 'المشروبات الباردة',
    items: [
      { name: 'لاتيه', price: '14SR', image: '/images/latte_cold.png' },
      { name: 'ايش موكا', price: '19SR', image: '/images/ice_moka.png' },
      { name: 'ايش تشوكلت', price: '18SR', image: '/images/ice_chocolate.png' },
      { name: 'ايس امريكانو', price: '15SR', image: '/images/ice_americano.png' },
      { name: 'ایس كراميل ميكاتو', price: '19SR', image: '/images/ice_caramel_maccato.png' },
      { name: 'ايس وايت موكا', price: '18SR', image: '/images/ice_white_mocha.png' },
      { name: 'اضافة شوت اسبريسو', price: '4SR', image: '/images/espresso_shot.png' },
      { name: 'بستاشيو بارد', price: '20SR', image: '/images/pistachio_cold.png' },
      { name: 'سبانش لاتيه', price: '18SR', image: '/images/spanish_latte.png' },
      { name: 'اسبريسو', price: '8SR', image: '/images/espresso_cold.png' },
      { name: 'كوفي توفي', price: '18SR', image: '/images/toffee_coffee_cold.png' },
      { name: 'بلاك كوفي', price: '15SR', image: '/images/black_coffee.png' },
      { name: 'ايس كراميل لاتيه', price: '18SR', image: '/images/ice_caramel_latte.png' },
      { name: 'بندق لاتيه', price: '18SR', image: '/images/hazelnut_latte.png' },
      { name: 'مويه', price: '1SR', image: '/images/water.png' },
      
    ]
  },
  {
    name: 'ركن الشاي',
    items: [
      { name: 'شاهي احمر نعناع', price: '3SR', image: '/images/red_tea_mint.png' },
      { name: 'شاهي احمر حبق', price: '3SR', image: '/images/red_tea_basil.png' },
      { name: 'شاهي احمر ساده', price: '3SR', image: '/images/red_tea_plain.png' },
    ]
  },
  {
    name: 'ركن القهوة المقطرة',
    items: [
      { name: 'ايس V60', price: '18SR', image: '/images/ice_v60.png' },
      { name: 'هوت V60', price: '16SR', image: '/images/hot_v60.png' },
      { name: 'ايس كيميكس', price: '18SR', image: '/images/ice_chemex.png' },
      { name: 'هوت كيميكس', price: '16SR', image: '/images/hot_chemex.png' },
    ]
  },
  {
    name: 'ركن القهوة السعوديه',
    items: [
      { name: 'قهوة سعودية', price: '30SR', image: '/images/saudi_coffee.png' },
      { name: 'دلة', price: '5SR', image: '/images/dallah.png' },
      { name: 'قهوة سعودية كوب', price: '15SR', image: '/images/saudi_coffee_cup.png' },
      { name: 'براد شاهي احمر', price: '15SR', image: '/images/red_tea_pot.png' },
      { name: 'براد شاهي اخضر', price: '20SR', image: '/images/green_tea_pot.png' },
      { name: 'براد شاهی طايفي', price: '20SR', image: '/images/taifi_tea_pot.png' },
      { name: 'براد شاهي مغربي', price: '20SR', image: '/images/moroccan_tea_pot.png' },
    ]
  },
  {
    name: 'ركن الميلك شيك',
    items: [
      { name: 'ميلك شيك توفي', price: '20SR', image: '/images/toffee_milkshake.png' },
      { name: 'ميلك شيك فراولة', price: '20SR', image: '/images/strawberry_milkshake.png' },
      { name: 'ميلك شيك مانجو', price: '20SR', image: '/images/mango_milkshake.png' },
      { name: 'ميلك شيك فانيلا', price: '20SR', image: '/images/vanilla_milkshake.png' },
      { name: 'ميلك شيك تشوكلت', price: '20SR', image: '/images/chocolate_milkshake.png' },
      { name: 'ميلك شيك اوريو', price: '20SR', image: '/images/oreo_milkshake.png' },
      { name: 'ميلك شيك كندر', price: '20SR', image: '/images/kinder_milkshake.png' },
      { name: 'ميلك شيك كتكات', price: '20SR', image: '/images/kitkat_milkshake.png' },
    ]
  },
  {
    name: 'ركن الموهيتو',
    items: [
      { name: 'سفن كرز', price: '13SR', image: '/images/seven_cherry.png' },
      { name: 'سفن تفاح', price: '13SR', image: '/images/seven_apple.png' },
      { name: 'سفن رمان', price: '13SR', image: '/images/seven_pomegranate.png' },
      { name: 'سفن فراولة', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن ازرق', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن احمر', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن باشن فروت', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن بطيخ', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن خوخ ', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن ساده', price: '5SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن اب', price: '10SR', image: '/images/seven_strawberry.png' },
      { name: 'سفن مكس', price: '15SR', image: '/images/seven_strawberry.png' },
      { name: 'ريدبول', price: '16SR', image: '/images/seven_strawberry.png' },
      { name: 'بايسن', price: '12SR', image: '/images/seven_strawberry.png' },
      { name: 'باشن فروت سفن', price: '13SR', image: '/images/seven_strawberry.png' },
      { name: 'كودرد كرز', price: '15SR', image: '' },
      { name: 'كودرد تفاح', price: '15SR', image: '' },
      { name: 'كودرد رمان', price: '15SR', image: '' },
      { name: 'كودرد فراوله', price: '15SR', image: '' },
      { name: 'كودرد ازرق', price: '15SR', image: '' },
      { name: 'كودرد احمر', price: '15SR', image: '' },
      { name: 'كودرد باشن', price: '15SR', image: '' },
      { name: 'فروت', price: '15SR', image: '' },
      { name: 'كودرد بطيخ', price: '15SR', image: '' },
      { name: 'كودرد خوخ', price: '15SR', image: '' },
      { name: 'كودرد مكس', price: '15SR', image: '' },
      { name: 'كودرد سادة', price: '15SR', image: '' },
      { name: 'ایس خوخ', price: '8SR', image: '' },
      { name: 'كودرد باشن فروت', price: '10SR', image: '' }

      
    ]
  },
  
  {
    name: 'ركن الطازج',
    items: [
      { name: 'ليمون نعناع', price: '16SR', image: '' },
      { name: 'مانجو', price: '16SR', image: '' },
      { name: 'فراولة', price: '16SR', image: '' },
      { name: 'رمان', price: '16SR', image: '' },
      { name: 'كوكتيل', price: '20SR', image: '' },
      { name: 'بطيخ', price: '16SR', image: '' },
      { name: 'برتقال', price: '18SR', image: '' },
      { name: 'اناناس', price: '16SR', image: '' },
      { name: 'تفاح', price: '16SR', image: '' },
      { name: 'افوكادو', price: '16SR', image: '' },
      { name: 'رمان', price: '16SR', image: '' },
      { name: 'توت ازرق', price: '16SR', image: '' },
      { name: 'جوافة', price: '16SR', image: '' },
      { name: 'كرز', price: '16SR', image: '' },
      { name: 'مانجا وتوت', price: '16SR', image: '' },
      { name: 'شمام', price: '16SR', image: '' }
    ]
  }
,  
  
   
 


 
    {
      name: 'ركن الحلى',
      items: [
        { name: 'براونيز', price: '20SR', image: '' },
        { name: 'تشيز كيك', price: '20SR', image: '' },
        { name: 'كوكيز', price: '20SR', image: '' },
        { name: 'تيراميسو', price: '20SR', image: '' },
        { name: 'مادلين', price: '20SR', image: '' },
      ]
    },
    {
      name: 'ركن الوجبات',
      items: [
        { name: 'برجر لحم', price: '20SR', image: '' },
        { name: 'برجر دجاج', price: '20SR', image: '' },
        { name: 'فوتتشيني باستا', price: '32SR', image: '' },
        { name: 'ايطالي باستا', price: '25SR', image: '' },
        { name: 'فاهيتا دجاج', price: '22SR', image: '' },
        { name: 'فاهيتا زنجر', price: '28SR', image: '' },
        { name: 'فرينش فرايز', price: '20SR', image: '' },
        { name: 'تشيكن فرايز', price: '25SR', image: '' }
      ]
    }
,    
    {
      name: 'ركن الشيشة',
      items: [
        { name: 'تفاحتين', price: '25SR', image: '' },
        { name: 'عنب توت', price: '25SR', image: '/images/anaab_toot.png' },
        { name: 'عنب نعناع', price: '25SR', image: '/images/anaab_naana.png' },
        { name: 'ليمون نعناع', price: '25SR', image: '/images/lemon_naana.png' },
        { name: 'مستكة', price: '25SR', image: '/images/mustaka.png' },
      ]
    },
    
    
 
  ];
  
 
  
  


  const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
    const [showCategories, setShowCategories] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTopButton, setShowTopButton] = useState(false);

    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName);
        setShowCategories(false);
    };

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('صباح الخير');
        } else if (hour < 18) {
            setGreeting('مساء الخير');
        } else {
            setGreeting('مساء الخير');
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        try {
            const items = menuCategories.find(cat => cat.name === activeCategory).items;
            setFilteredItems(items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        } catch (err) {
            setError('Error loading items');
        } finally {
            setLoading(false);
        }
    }, [activeCategory, searchTerm]);

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
        <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 p-4 sm:p-6 md:p-8" dir="rtl">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-10 text-amber-900 drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {greeting}، مرحباً بكم في قائمة مقهى صدفة
            </motion.h1>

            {/* Category selector (dropdown on mobile, tabs on larger screens) */}
            <div className="relative mb-8 sm:mb-10">
                <motion.button
                    className="w-full px-6 py-4 bg-white rounded-full shadow-lg flex items-center justify-between text-amber-900 sm:hidden"
                    onClick={() => setShowCategories(!showCategories)}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="flex items-center">
                        <span className="ml-2 text-3xl">{menuCategories.find(cat => cat.name === activeCategory).icon}</span>
                        <span className="text-xl">{activeCategory}</span>
                    </span>
                    <ChevronDown className={`transform transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                </motion.button>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {showCategories && (
                        <motion.div
                            className="absolute z-10 mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden sm:hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {menuCategories.map((category) => (
                                <motion.button
                                    key={category.name}
                                    className={`w-full px-6 py-4 text-right text-lg ${
                                        activeCategory === category.name ? 'bg-amber-100' : ''
                                    }`}
                                    onClick={() => handleCategoryClick(category.name)}
                                    whileHover={{ backgroundColor: '#fef3c7' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="flex items-center justify-end">
                                        <span className="ml-3 text-3xl">{category.icon}</span>
                                        <span>{category.name}</span>
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tabs for larger screens */}
                <div className="hidden sm:flex flex-wrap justify-center gap-4">
                    {menuCategories.map((category) => (
                        <motion.button
                            key={category.name}
                            className={`px-6 py-3 rounded-full text-lg ${
                                activeCategory === category.name
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-white text-amber-900'
                            } shadow-lg hover:shadow-xl transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.name)}
                        >
                            <span className="flex items-center">
                                <span className="ml-2 text-2xl">{category.icon}</span>
                                <span>{category.name}</span>
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Search input */}
            <div className="mb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="ابحث عن منتج..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-4 bg-white rounded-full shadow-lg text-lg text-amber-900 pl-12"
                    />
                    <Search className="absolute bg-white left-4 top-1/2 transform -translate-y-1/2 text-amber-900" />
                </div>
            </div>

            {/* Loading and Error States */}
            {loading && (
                <div className="flex justify-center items-center h-24">
                    <FaSpinner className="animate-spin text-amber-900" size={24} />
                </div>
            )}
            {error && (
                <div className="text-center text-red-600">
                    <p>{error}</p>
                </div>
            )}

            {/* Menu Items Grid */}
            {!loading && !error && (
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-32 sm:h-48 object-cover" />
                                    <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="p-3 sm:p-5">
                                    <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-1 sm:mb-2">{item.name}</h3>
                                    <p className="text-sm sm:text-md text-gray-600">{item.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Fixed WhatsApp Icon */}
            <motion.a
                href="https://wa.me/+966564366276?text=مرحبا "
                className="fixed right-6 bottom-24 inline-flex items-center justify-center p-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg z-50"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaWhatsapp size={28} color="white" />
            </motion.a>

            {/* Back to Top Button */}
            {showTopButton && (
                <motion.button
                    className="fixed right-6 bottom-6 inline-flex items-center justify-center p-4 rounded-full bg-yellow-400 transition-colors duration-300 shadow-lg z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                >
                    <ChevronDown size={28} color="white" />
                </motion.button>
            )}
        </div>
    );
};

export default Menu;