// --- MOCK DATABASE ---
// This file acts as a simple, centralized database using localStorage.
// In a real application, these functions would make API calls to a backend server.

function loadData(key, defaultValue) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Initial default data
const defaultCategories = [
    { id: "snacks", name_en: "Snacks & Chips", name_ur: "نمکین اور چپس", icon: "fa-cookie-bite" },
    { id: "biscuits", name_en: "Biscuits", name_ur: "بسکٹ", icon: "fa-cookie" },
    { id: "bakery", name_en: "Bakery & Cakes", name_ur: "بیکری اور کیک", icon: "fa-bread-slice" },
    { id: "peek-freans", name_en: "Peek Freans", name_ur: "پیک فریز", icon: "fa-cookie-bite" },
    { id: "meat-fish", name_en: "Meat & Fish", name_ur: "گوشت اور مچھلی", icon: "fa-fish" }
];


const defaultProducts = [
    { id: 1, name_en: "BISCONI COFFEE RICH CAKES", name_ur: "بسکونی کافی رچ کیک", price: 470, stock: 50, category: "biscuits", image: "https://placehold.co/300x300/f3e8ff/a855f7?text=Coffee+Cake", description_en: "Coffee-flavored rich cakes.", description_ur: "کافی کے ذائقے والے رچ کیکس۔", top_selling: false },
    { id: 2, name_en: "BISCONI FLO CHOCOLATE RS 10", name_ur: "بسکونی فلو چاکلیٹ 10 روپے", price: 280, stock: 150, category: "biscuits", image: "https://placehold.co/300x300/fecdd3/f43f5e?text=Choco+Flo", description_en: "Chocolate-flavored biscuits.", description_ur: "چاکلیٹ کے ذائقے والے بسکٹ۔", top_selling: true },
    { id: 3, name_en: "BISCONNI HAVE A NICE DAY RS 10", name_ur: "بسکونی ہیو اے نائس ڈے 10 روپے", price: 220, stock: 120, category: "biscuits", image: "https://placehold.co/300x300/d1d5db/374151?text=Nice+Day", description_en: "Biscuits to have a nice day.", description_ur: "ایک اچھے دن کے لیے بسکٹ۔", top_selling: false },
    { id: 4, name_en: "BISCONNI BUTTER COAKIES RS 70", name_ur: "بسکونی بٹر کوکیز 70 روپے", price: 400, stock: 80, category: "biscuits", image: "https://placehold.co/300x300/fde047/b45309?text=Butter+Cookies", description_en: "Rich butter cookies.", description_ur: "رچ بٹر کوکیز۔", top_selling: true },
    { id: 5, name_en: "BISCONNI CHAI WALA BISCUTE RS 10", name_ur: "بسکونی چائے والا بسکٹ 10 روپے", price: 220, stock: 200, category: "biscuits", image: "https://placehold.co/300x300/d6d3d1/78716c?text=Chai+Biscuit", description_en: "Biscuits perfect for tea.", description_ur: "چائے کے لیے بہترین بسکٹ۔", top_selling: true },
    { id: 6, name_en: "BISCONNI CHIP HOP RS 30", name_ur: "بسکونی چپ ہاپ 30 روپے", price: 280, stock: 90, category: "biscuits", image: "https://placehold.co/300x300/e5e5e5/171717?text=Chip+Hop", description_en: "Chocolate chip cookies.", description_ur: "چاکلیٹ چپ کوکیز۔", top_selling: false },
    { id: 7, name_en: "BISCONNI CHOCOLATE CHIP LOADED RS 20", name_ur: "بسکونی چاکلیٹ چپ لوڈڈ 20 روپے", price: 280, stock: 75, category: "biscuits", image: "https://placehold.co/300x300/525252/d4d4d4?text=Loaded+Chip", description_en: "Cookies loaded with chocolate chips.", description_ur: "چاکلیٹ چپس سے بھرے کوکیز۔", top_selling: true },
    { id: 8, name_en: "BISCONNI CHOCOLATE CHIP RS 10", name_ur: "بسکونی چاکلیٹ چپ 10 روپے", price: 220, stock: 160, category: "biscuits", image: "https://placehold.co/300x300/fecaca/dc2626?text=Choco+Chip", description_en: "Classic chocolate chip cookies.", description_ur: "کلاسک چاکلیٹ چپ کوکیز۔", top_selling: false },
    { id: 9, name_en: "BISCONNI CHOCOLATE CHIP RS 20 16 pca", name_ur: "بسکونی چاکلیٹ چپ 20 روپے 16 پیک", price: 300, stock: 65, category: "biscuits", image: "https://placehold.co/300x300/fecaca/dc2626?text=Choco+Chip", description_en: "16 pieces of chocolate chip cookies.", description_ur: "چاکلیٹ چپ کوکیز کے 16 پیس۔", top_selling: false },
    { id: 10, name_en: "BISCONNI CHOCOLATE CHIP RS 30", name_ur: "بسکونی چاکلیٹ چپ 30 روپے", price: 340, stock: 100, category: "biscuits", image: "https://placehold.co/300x300/fecaca/dc2626?text=Choco+Chip", description_en: "Larger pack of chocolate chip cookies.", description_ur: "چاکلیٹ چپ کوکیز کا بڑا پیک۔", top_selling: true },
    { id: 11, name_en: "BISCONNI CHOCOLATOTO RS 10 30 pca", name_ur: "بسکونی چاکولاتو 10 روپے", price: 280, stock: 140, category: "biscuits", image: "https://placehold.co/300x300/a8a29e/292524?text=Chocolatoto", description_en: "Chocolate-flavored wafer biscuits.", description_ur: "چاکلیٹ کے ذائقے والے ویفر بسکٹ۔", top_selling: false },
    { id: 12, name_en: "BISCONNI COCOMO CHOCOLATE RS 10", name_ur: "بسکونی کوکومو چاکلیٹ 10 روپے", price: 220, stock: 180, category: "biscuits", image: "https://placehold.co/300x300/a8a29e/292524?text=Cocomo", description_en: "Chocolate-filled cookies.", description_ur: "چاکلیٹ سے بھرے کوکیز۔", top_selling: true },
    { id: 13, category: "biscuits", name_en: "BISCONNI COCOMO RS 100", name_ur: "بسکونی کوکومو 100 روپے", price: 100, image: "https://placehold.co/300x300/a8a29e/292524?text=Cocomo", description_en: "Large pack of Cocomo cookies.", description_ur: "کوکومو کوکیز کا بڑا پیک۔", stock: 40, top_selling: false },
    { id: 14, name_en: "BISCONNI CRUX RS 10", name_ur: "بسکونی کرکس 10 روپے", price: 220, stock: 110, category: "biscuits", image: "https://placehold.co/300x300/fde047/b45309?text=Crux", description_en: "Crispy biscuits.", description_ur: "کرسپی بسکٹ۔", top_selling: false },
    { id: 15, name_en: "BISCONNI DIGESTUVE ? sugar free", name_ur: "بسکونی ڈائجسٹو (شوگر فری)", price: 280, stock: 35, category: "biscuits", image: "https://placehold.co/300x300/d6d3d1/78716c?text=Digestive", description_en: "Sugar-free digestive biscuits.", description_ur: "شوگر فری ڈائجسٹو بسکٹ۔", top_selling: false },
    { id: 16, name_en: "BISCONNI DIVINE RS 30", name_ur: "بسکونی ڈیوائن 30 روپے", price: 280, stock: 60, category: "biscuits", image: "https://placehold.co/300x300/6ee7b7/065f46?text=Divine", description_en: "Divine flavored biscuits.", description_ur: "ڈیوائن ذائقے والے بسکٹ۔", top_selling: false },
    { id: 17, name_en: "BISCONNI FLARE RS 40", name_ur: "بسکونی فلیئر 40 روپے", price: 300, stock: 45, category: "biscuits", image: "https://placehold.co/300x300/fca5a5/b91c1c?text=Flare", description_en: "Spicy flavored crackers.", description_ur: "مسالہ دار فلیور والے کریکرز۔", top_selling: false },
    { id: 18, name_en: "BISCONNI FUDGE BROWINE RS 40", name_ur: "بسکونی فج براؤنی 40 روپے", price: 300, stock: 25, category: "bakery", image: "https://placehold.co/300x300/d1d5db/4b5563?text=Fudge+Brownie", description_en: "Rich fudge brownie.", description_ur: "رچ فج براؤنی۔", top_selling: false },
    { id: 19, name_en: "BISCONNI LOTUS CAKE RS 40", name_ur: "بسکونی لوٹس کیک 40 روپے", price: 380, stock: 30, category: "bakery", image: "https://placehold.co/300x300/e0f2fe/0ea5e9?text=Lotus+Cake", description_en: "Lotus flavored cake.", description_ur: "لوٹس کے ذائقے والا کیک۔", top_selling: false },
    { id: 20, name_en: "BISCONNI MI AMOR RS 40", name_ur: "بسکونی می امور 40 روپے", price: 300, stock: 55, category: "biscuits", image: "https://placehold.co/300x300/fbcfe8/be185d?text=Mi+Amor", description_en: "Sweet heart-shaped biscuits.", description_ur: "میٹھے دل کی شکل والے بسکٹ۔", top_selling: false },
    { id: 21, name_en: "BISCONNI NOVITA CHOCOLATE RS 10 30 pca", name_ur: "بسکونی نویٹا چاکلیٹ 10 روپے", price: 280, stock: 170, category: "biscuits", image: "https://placehold.co/300x300/d4d4d4/525252?text=Novita+Choco", description_en: "Chocolate cream-filled biscuits.", description_ur: "چاکلیٹ کریم سے بھرے بسکٹ۔", top_selling: true },
    { id: 22, name_en: "BISCONNI NOVITA ORANGE RS 10 30 pca", name_ur: "بسکونی نویٹا اورنج 10 روپے", price: 280, stock: 130, category: "biscuits", image: "https://placehold.co/300x300/fed7aa/ea580c?text=Novita+Orange", description_en: "Orange cream-filled biscuits.", description_ur: "اورنج کریم سے بھرے بسکٹ۔", top_selling: false },
    { id: 23, name_en: "BISCONNI PERFRTTO RS 30", name_ur: "بسکونی پرفیکٹو 30 روپے", price: 280, stock: 95, category: "biscuits", image: "https://placehold.co/300x300/a5f3fc/0891b2?text=Perfetto", description_en: "Perfectly baked biscuits.", description_ur: "مکمل طور پر پکے ہوئے بسکٹ۔", top_selling: false },
    { id: 24, name_en: "BISCONNI PRIME ECLIPSE RS 30", name_ur: "بسکونی پرائم ایکلپس 30 روپے", price: 280, stock: 85, category: "biscuits", image: "https://placehold.co/300x300/c7d2fe/4338ca?text=Eclipse", description_en: "Creamy filled sandwich biscuits.", description_ur: "کریمی بھرے ہوئے سینڈوچ بسکٹ۔", top_selling: false },
    { id: 25, name_en: "BISCONNI RITE RS 10 30 pca", name_ur: "بسکونی رائٹ 10 روپے", price: 280, stock: 120, category: "biscuits", image: "https://placehold.co/300x300/fca5a5/b91c1c?text=Rite", description_en: "Simple and delicious biscuits.", description_ur: "سادہ اور مزیدار بسکٹ۔", top_selling: true },
    { id: 26, name_en: "BISCONNI TEA MATE RS 20", name_ur: "بسکونی ٹی میٹ 20 روپے", price: 290, stock: 135, category: "biscuits", image: "https://placehold.co/300x300/f3e8ff/a855f7?text=Tea+Mate", description_en: "Biscuits to enjoy with tea.", description_ur: "چائے کے ساتھ لطف اندوز ہونے کے لیے بسکٹ۔", top_selling: false },
    { id: 27, name_en: "BISCONNI TREAT RS 10", name_ur: "بسکونی ٹریٹ 10 روپے", price: 220, stock: 190, category: "biscuits", image: "https://placehold.co/300x300/bbf7d0/16a34a?text=Treat", description_en: "A sweet treat biscuit.", description_ur: "ایک میٹھا ٹریٹ بسکٹ۔", top_selling: false },
    { id: 28, name_en: "BISCONNI ROLLIES CAKES", name_ur: "بسکونی رولیز کیکس", price: 300, stock: 40, category: "bakery", image: "https://placehold.co/300x300/fecaca/dc2626?text=Rollies+Cakes", description_en: "Swiss roll style cakes.", description_ur: "سوئس رول اسٹائل کے کیکس۔", top_selling: false },
    { id: 29, name_en: "BISCONNI ZABER RUSK CAKE RUSK", name_ur: "بسکونی زابر رسک کیک رسک", price: 220, stock: 60, category: "bakery", image: "https://placehold.co/300x300/ffedd5/9a3412?text=Rusk+Cake", description_en: "Crispy cake rusk.", description_ur: "کرسپی کیک رسک۔", top_selling: false },
    { id: 30, name_en: "BISONNI CHIP CAKE RS 50", name_ur: "بسکونی چپ کیک 50 روپے", price: 380, stock: 35, category: "bakery", image: "https://placehold.co/300x300/fecaca/dc2626?text=Chip+Cake", description_en: "Cake with chocolate chips.", description_ur: "چاکلیٹ چپس والا کیک۔", top_selling: false },
    { id: 41, name_en: "Peek Freans Sooper rs 10", name_ur: "پیک فریز سوپر", price: 230, stock: 300, category: "peek-freans", image: "https://placehold.co/300x300/ffedd5/9a3412?text=Sooper", description_en: "Pakistan's No. 1 selling biscuit, an original egg & milk cookie.", description_ur: "پاکستان کا نمبر 1 سب سے زیادہ فروخت ہونے والا بسکٹ، اصل انڈے اور دودھ کی کوکی۔", top_selling: true },
    { id: 42, name_en: "Peek Freans Sooper Elaichi rs 10", name_ur: "پیک فریز سوپر الائچی", price: 230, stock: 250, category: "peek-freans", image: "https://placehold.co/300x300/ffedd5/9a3412?text=Sooper+Elaichi", description_en: "An egg & milk cookie with the added flavor of cardamom.", description_ur: "الائچی کے ذائقے والا انڈے اور دودھ کا بسکٹ۔", top_selling: false },
    { id: 43, name_en: "Peek Freans Gluco rs 10", name_ur: "پیک فریز گلوکو", price: 230, stock: 280, category: "peek-freans", image: "https://placehold.co/300x300/d6d3d1/78716c?text=Gluco", description_en: "A classic biscuit with the goodness of milk and wheat.", description_ur: "دودھ اور گندم کی بھلائی کے ساتھ ایک کلاسک بسکٹ۔", top_selling: true },
    { id: 44, name_en: "Peek Freans Peanut Pik rs 10 ", name_ur: "پیک فریز پینٹ پک", price: 230, stock: 200, category: "peek-freans", image: "https://placehold.co/300x300/d9f991/4d7c0f?text=Peanut+Pik", description_en: "Biscuits with a delightful peanut flavor.", description_ur: "مونگ پھلی کے مزیدار ذائقے والے بسکٹ۔", top_selling: false },
    { id: 45, name_en: "Peek Freans Rio (Chocolate) rs 10", name_ur: "پیک فریز ریو (چاکلیٹ)", price: 230, stock: 190, category: "peek-freans", image: "https://placehold.co/300x300/fecaca/dc2626?text=Rio+Choco", description_en: "Chocolate cream-filled sandwich cookies.", description_ur: "چاکلیٹ کریم سے بھرے سینڈوچ کوکیز۔", top_selling: true },
    { id: 46, name_en: "Peek Freans Rio (Strawberry) rs 10", name_ur: "پیک فریز ریو (اسٹرابیری)", price: 230, stock: 180, category: "peek-freans", image: "https://placehold.co/300x300/fbcfe8/be185d?text=Rio+Straw", description_en: "Strawberry cream-filled sandwich cookies.", description_ur: "اسٹرابیری کریم سے بھرے سینڈوچ کوکیز۔", top_selling: false },
    { id: 47, name_en: "Peek Freans Chocolate Sandwich rs 10", name_ur: "پیک فریز چاکلیٹ سینڈوچ", price: 230, stock: 150, category: "peek-freans", image: "https://placehold.co/300x300/d4d4d4/525252?text=Choco+Sandwich", description_en: "A rich chocolate sandwich biscuit.", description_ur: "ایک رچ چاکلیٹ سینڈوچ بسکٹ۔", top_selling: false },
    { id: 48, name_en: "Peek Freans Lemon Sandwich rs 10", name_ur: "پیک فریز لیمن سینڈوچ", price: 230, stock: 140, category: "peek-freans", image: "https://placehold.co/300x300/fef08a/ca8a04?text=Lemon+Sandwich", description_en: "A zesty lemon-flavored sandwich biscuit.", description_ur: "لیموں کے ذائقے والا سینڈوچ بسکٹ۔", top_selling: false },
    { id: 49, name_en: "Peek Freans Marie rs 10", name_ur: "پیک فریز میری", price: 230, stock: 220, category: "peek-freans", image: "https://placehold.co/300x300/c7d2fe/4338ca?text=Marie", description_en: "Light and crispy Marie biscuits.", description_ur: "ہلکے اور کرسپی میری بسکٹ۔", top_selling: false },
    { id: 50, name_en: "Peek Freans Click rs 10 ", name_ur: "پیک فریز کلک", price: 300, stock: 170, category: "peek-freans", image: "https://placehold.co/300x300/d1d5db/374151?text=Click", description_en: "A unique sweet and salty biscuit with a hint of cumin (zeera).", description_ur: "زیرہ کے اشارے کے ساتھ ایک منفرد میٹھا اور نمکین بسکٹ۔", top_selling: true },
    { id: 51, name_en: "Peek Freans Party rs 10", name_ur: "پیک فریز پارٹی", price: 230, stock: 160, category: "peek-freans", image: "https://placehold.co/300x300/6ee7b7/065f46?text=Party", description_en: "A light and airy biscuit perfect for any party.", description_ur: "کسی بھی پارٹی کے لیے ایک ہلکا اور ہوا دار بسکٹ۔", top_selling: false },
    { id: 52, name_en: "Peek Freans Saltish rs 20", name_ur: "پیک فریز سالٹش", price: 230, stock: 120, category: "peek-freans", image: "https://placehold.co/300x300/fca5a5/b91c1c?text=Saltish", description_en: "Salty crackers perfect for a snack.", description_ur: "نمکین کریکرز، ناشتے کے لیے بہترین۔", top_selling: false },
    { id: 54, name_en: "Peek Freans Butter Puff rs 20 ", name_ur: "پیک فریز بٹر پف", price: 300, stock: 110, category: "peek-freans", image: "https://placehold.co/300x300/fde047/b45309?text=Butter+Puff", description_en: "Flaky and buttery crackers.", description_ur: "فلی کی اور مکھن والے کریکرز۔", top_selling: false },
    { id: 55, name_en: "Peek Freans Whole Wheat Slice (Sugar Free)", name_ur: "پیک فریز ہول ویٹ سلائس (شوگر فری)", price: 300, stock: 70, category: "peek-freans", image: "https://placehold.co/300x300/d6d3d1/78716c?text=Whole+Wheat", description_en: "A healthy sugar-free whole wheat biscuit.", description_ur: "ایک صحت مند شوگر فری ہول ویٹ بسکٹ۔", top_selling: false },
    { id: 56, name_en: "Peek Freans Cake Up (Double Chocolate)", name_ur: "پیک فریز کیک اپ (ڈبل چاکلیٹ)", price: 220, stock: 80, category: "peek-freans", image: "https://placehold.co/300x300/d4d4d4/525252?text=Cake+Up", description_en: "A soft cake with a creamy chocolate center.", description_ur: "ایک نرم کیک جس کے درمیان میں کریمی چاکلیٹ ہوتی ہے۔", top_selling: true },
    { id: 57, name_en: "Peek Freans Cake Up (Strawberry)", name_ur: "پیک فریز کیک اپ (اسٹرابیری)", price: 220, stock: 75, category: "peek-freans", image: "https://placehold.co/300x300/fbcfe8/be185d?text=Cake+Up+Straw", description_en: "A soft cake with a creamy strawberry center.", description_ur: "ایک نرم کیک جس کے درمیان میں کریمی اسٹرابیری ہوتی ہے۔", top_selling: false },
    { id: 58, name_en: "Peek Freans Smile Donut Cake (Chocolate)", name_ur: "پیک فریز سمائل ڈونٹ کیک (چاکلیٹ)", price: 280, stock: 65, category: "peek-freans", image: "https://placehold.co/300x300/d4d4d4/525252?text=Donut+Cake", description_en: "A chocolate-flavored donut-shaped cake.", description_ur: "چاکلیٹ کے ذائقے والا ڈونٹ کی شکل کا کیک۔", top_selling: false },
    { id: 59, name_en: "Peek Freans Gluco Teddy Cake", name_ur: "پیک فریز گلوکو ٹیڈی کیک", price: 300, stock: 95, category: "peek-freans", image: "https://placehold.co/300x300/d6d3d1/78716c?text=Teddy+Cake", description_en: "A teddy bear-shaped cake, great for kids.", description_ur: "ٹیڈی بیئر کی شکل کا کیک، بچوں کے لیے بہترین۔", top_selling: false },
    { id: 61, name_en: "Peek Freans Choco Lava", name_ur: "پیک فریز چاکو لاوا", price: 300, stock: 80, category: "peek-freans", image: "https://placehold.co/300x300/fecdd3/f43f5e?text=Choco+Lava", description_en: "Biscuits with a liquid chocolate lava filling.", description_ur: "مائع چاکلیٹ لاوا بھرائی والے بسکٹ۔", top_selling: true },
    { id: 62, name_en: "Peek Freans Choco Licious", name_ur: "پیک فریز چاکو لیشئس", price: 300, stock: 120, category: "peek-freans", image: "https://placehold.co/300x300/fecaca/dc2626?text=Choco+Licious", description_en: "A chocolate biscuit with chocolate chips.", description_ur: "چاکلیٹ چپس والا ایک چاکلیٹ بسکٹ۔", top_selling: false },
    { id: 63, category: "meat-fish", name_en: "Chicken (1kg)", name_ur: "چکن (1 کلو)", price: 750, image: "https://placehold.co/300x300/fee2e2/ef4444?text=Chicken", description_en: "Fresh skinless chicken.", description_ur: "تازہ بغیر جلد کا چکن۔", stock: 30, top_selling: false }
];

const defaultOrders = [
    { id: `AW-123456`, customer: 'Test', date: '2025-08-29', total: 1100, status: 'Processing' },
    { id: `AW-234567`, customer: 'Test', date: '2025-08-28', total: 430, status: 'Shipped' },
];

// Initialize data if it doesn't exist in localStorage
if (!localStorage.getItem('ayatWholesaleProducts')) {
    saveData('ayatWholesaleProducts', defaultProducts);
}
if (!localStorage.getItem('ayatWholesaleCategories')) {
    saveData('ayatWholesaleCategories', defaultCategories);
}
if (!localStorage.getItem('ayatWholesaleOrders')) {
    saveData('ayatWholesaleOrders', defaultOrders);
}


// --- EXPORTED FUNCTIONS ---

export function getProducts() {
    return loadData('ayatWholesaleProducts', []);
}

export function getCategories() {
    return loadData('ayatWholesaleCategories', []);
}

export function getOrders() {
    return loadData('ayatWholesaleOrders', []);
}

export function saveProduct(productData) {
    const products = getProducts();
    const index = products.findIndex(p => p.id === productData.id);

    if (index > -1) {
        // Update existing product
        products[index] = productData;
    } else {
        // Add new product
        products.push(productData);
    }
    saveData('ayatWholesaleProducts', products);
}

export function deleteProduct(productId) {
    let products = getProducts();
    products = products.filter(p => p.id !== productId);
    saveData('ayatWholesaleProducts', products);
}

export function saveOrder(orderData) {
    const orders = getOrders();
    const index = orders.findIndex(o => o.id === orderData.id);

    if (index > -1) {
        // Update existing order (e.g., status change)
        orders[index] = orderData;
    } else {
        // Add new order        
        orders.push(orderData);
    }
    saveData('ayatWholesaleOrders', orders);
}
