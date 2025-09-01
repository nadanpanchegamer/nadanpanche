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
    { id: 'fruits-veg', name_en: 'Fruits & Vegetables', name_ur: 'پھل اور سبزیاں', icon: 'fa-carrot' },
    { id: 'dairy-eggs', name_en: 'Dairy & Eggs', name_ur: 'دودھ اور انڈے', icon: 'fa-egg' },
    { id: 'meat-fish', name_en: 'Meat & Fish', name_ur: 'گوشت اور مچھلی', icon: 'fa-fish' },
    { id: 'bakery', name_en: 'Bakery', name_ur: 'بیکری', icon: 'fa-bread-slice' },
    { id: 'beverages', name_en: 'Beverages', name_ur: 'مشروبات', icon: 'fa-wine-bottle' },
    { id: 'snacks', name_en: 'Snacks', name_ur: 'نمکین', icon: 'fa-cookie-bite' },
];

const defaultProducts = [
    { id: 1, category: 'fruits-veg', name_en: 'Apples (1kg)', name_ur: 'سیب (1 کلو)', price: 250, image: 'https://placehold.co/300x300/fecaca/db2777?text=Apple', description_en: 'Fresh, juicy apples.', description_ur: 'تازہ، رسیلے سیب۔', stock: 50, top_selling: true },
    { id: 2, category: 'fruits-veg', name_en: 'Bananas (Dozen)', name_ur: 'کیلے (درجن)', price: 150, image: 'https://placehold.co/300x300/fef08a/ca8a04?text=Banana', description_en: 'Ripe and sweet bananas.', description_ur: 'پکے اور میٹھے کیلے۔', stock: 100, top_selling: false },
    { id: 3, category: 'fruits-veg', name_en: 'Tomatoes (1kg)', name_ur: 'ٹماٹر (1 کلو)', price: 120, image: 'https://placehold.co/300x300/fca5a5/b91c1c?text=Tomato', description_en: 'Farm-fresh tomatoes.', description_ur: 'کھیت کے تازہ ٹماٹر۔', stock: 80, top_selling: false },
    { id: 4, category: 'dairy-eggs', name_en: 'Milk (1 Litre)', name_ur: 'دودھ (1 لیٹر)', price: 180, image: 'https://placehold.co/300x300/e0f2fe/0ea5e9?text=Milk', description_en: 'Fresh pasteurized milk.', description_ur: 'تازہ پاسچرائزڈ دودھ۔', stock: 60, top_selling: true },
    { id: 5, category: 'dairy-eggs', name_en: 'Eggs (Dozen)', name_ur: 'انڈے (درجن)', price: 300, image: 'https://placehold.co/300x300/fef3c7/d97706?text=Eggs', description_en: 'Farm-fresh brown eggs.', description_ur: 'فارم کے تازہ بھورے انڈے۔', stock: 120, top_selling: true },
    { id: 6, category: 'dairy-eggs', name_en: 'Yogurt (500g)', name_ur: 'دہی (500 گرام)', price: 150, image: 'https://placehold.co/300x300/f3f4f6/6b7280?text=Yogurt', description_en: 'Plain, natural yogurt.', description_ur: 'سادہ، قدرتی دہی۔', stock: 40, top_selling: false },
    { id: 7, category: 'bakery', name_en: 'Bread (Large)', name_ur: 'ڈبل روٹی (بڑی)', price: 130, image: 'https://placehold.co/300x300/fde68a/b45309?text=Bread', description_en: 'Freshly baked sliced bread.', description_ur: 'تازہ پکی ہوئی سلائسڈ ڈبل روٹی۔', stock: 90, top_selling: true },
    { id: 8, category: 'beverages', name_en: 'Mineral Water (1.5L)', name_ur: 'منرل واٹر (1.5 لیٹر)', price: 80, image: 'https://placehold.co/300x300/bfdbfe/3b82f6?text=Water', description_en: 'Pure mineral water.', description_ur: 'خالص منرل واٹر۔', stock: 200, top_selling: false },
    { id: 9, category: 'snacks', name_en: 'Potato Chips (Large)', name_ur: 'آلو کے چپس (بڑا)', price: 100, image: 'https://placehold.co/300x300/fef9c3/f59e0b?text=Chips', description_en: 'Classic salted potato chips.', description_ur: 'کلاسک نمکین آلو کے چپس۔', stock: 150, top_selling: true },
    { id: 10, category: 'meat-fish', name_en: 'Chicken (1kg)', name_ur: 'چکن (1 کلو)', price: 750, image: 'https://placehold.co/300x300/fee2e2/ef4444?text=Chicken', description_en: 'Fresh skinless chicken.', description_ur: 'تازہ بغیر جلد کا چکن۔', stock: 30, top_selling: false },
];

const defaultOrders = [
    { id: `AW-123456`, customer: 'Ahmed Khan', date: '2025-08-29', total: 1100, status: 'Processing' },
    { id: `AW-234567`, customer: 'Fatima Ali', date: '2025-08-28', total: 430, status: 'Shipped' },
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
