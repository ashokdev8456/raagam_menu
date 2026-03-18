const menuItems = [

/* APPETIZERS */
{name:"Gobi 65",price:16.99,category:"appetizers",img:"assets/gobi_65.jpg"},
{name:"Noodles",price:13.99,category:"appetizers",img:"assets/noodles.jpg"},
{name:"Veg Manchurian",price:16.99,category:"appetizers",img:"assets/veg_manchurian.jpg"},
{name:"Gobi Manchurian",price:16.99,category:"appetizers",img:"assets/gobi_manchirian.jpg"},
{name:"Dahi Vade",price:16.99,category:"appetizers",img:"assets/dahi_vada.jpg"},
{name:"Pani Puri (5 types)",price:16.99,category:"appetizers",img:"assets/pani_puri.jpg"},
{name:"Papdi Chat",price:16.99,category:"appetizers",img:"assets/papdi_chat.jpg"},
{name:"Samosa Chat",price:16.99,category:"appetizers",img:"assets/samosa_chat.jpg"},
{name:"Bhel Puri",price:16.99,category:"appetizers",img:"assets/bhel_puri.jpg"},
{name:"cholle samosa",price:19.99,category:"appetizers",img:"assets/chole_samosa.jpg"},
{name:"Veg Galauti Kebab",price:9.99,category:"appetizers",img:"assets/Veg_Galauti_Kebab.jpg"},
{name:"Aloo Tikki",price:9.99,category:"appetizers",img:"assets/aloo_tikki.jpg"},
{name:"Pav Bhaji",price:8.99,category:"appetizers",img:"assets/pav_bhaji.jpg"},
{name:"Chickpeas Salad",price:10.99,category:"appetizers",img:"assets/chickpeas_salad.jpg"},
{name:"Green Salad",price:9.99,category:"appetizers",img:"assets/green_salad.jpg"},
{name:"Pasta",price:10.99,category:"appetizers",img:"assets/pasta.jpg"},
{name:"Idli",price:18.99,category:"appetizers",img:"assets/idli.jpg"},
{name:"Medu vada",price:8.99,category:"appetizers",img:"assets/medu_vada.jpg"},
{name:"Moongeda",price:15.99,category:"appetizers",img:"assets/moongeda.jpg"},
{name:"Pakora (Mixed)",price:13.99,category:"appetizers",img:"assets/pakora.jpg"},
{name:"Kanji Vada",price:16.99,category:"appetizers",img:"assets/kanji_vada.jpg"},
{name:"Sabudana vade",price:13.99,category:"appetizers",img:"assets/sabudana_vada.jpg"},
{name:"Khamann dhokla",price:16.99,category:"appetizers",img:"assets/khamann_dhokla.jpg"},

/* Papad */
{name:"Plain / Masala Urad Papad",price:4.99,category:"papad",img:"assets/masala_papad.jpg"},
{name:"Sabudana Papad",price:5.99,category:"papad",img:"assets/sabudana_papad.jpg"},
{name:"Fry’s",price:3.99,category:"papad",img:"assets/fry.jpg"},
{name:"Daal Papad",price:4.99,category:"papad",img:"assets/daal_papad.jpg"},
// {name:"Butter",price:2.99,category:"sides",img:"assets/butter.jpg"},
// {name:"Extra Puri (2)",price:3.99,category:"sides",img:"assets/aloo-puri.jpg"},

/* Curries */
{name:"Paneer butter masala", price:12.99,category:"curry",img:"assets/panner_butter.jpg"},
{name:"Mix veg",price:12.99,category:"curry",img:"assets/mix_veg.jpg"},
{name:"Shahi paneer",price:13.99,category:"curry",img:"assets/shahi_paneer.jpg"},
{name:"Methi matar malai",price:13.99,category:"curry",img:"assets/methi.jpg"},
{name:"Palak paneer",price:14.99,category:"curry",img:"assets/palak.jpg"},
{name:"Gatte ki Sabji",price:14.99,category:"curry",img:"assets/gatte.jpg"},
{name:"Malai pyaz sabzi",price:9.99,category:"curry",img:"assets/malai.jpg"},
{name:"Malai Kofta", price:12.99,category:"curry",img:"assets/malai_kofta.jpg"},
{name:"Cholle",price:12.99,category:"curry",img:"assets/chole.jpg"},
{name:"Rajma",price:13.99,category:"curry",img:"assets/rajma.jpg"},
{name:"Aloo curry",price:13.99,category:"curry",img:"assets/aloo.jpg"},
{name:"Veg Jalfrezi",price:14.99,category:"curry",img:"assets/Veg_jalfrezi.jpg"},
{name:"Kadai Paneer",price:14.99,category:"curry",img:"assets/kadai_paneer.jpg"},
{name:"Dum aloo", price:12.99,category:"curry",img:"assets/dum_aloo.jpg"},
{name:"Aloo Pyaz Paneer ki Sabzi",price:12.99,category:"curry",img:"assets/Aloo_pyaz.jpg"},
{name:"Paneer Angara",price:13.99,category:"curry",img:"assets/Paneer_Angara.jpg"},
{name:"Paneer Afgani",price:13.99,category:"curry",img:"assets/Paneer_Afgani.jpg"},
{name:"Peshawari Paneer",price:14.99,category:"curry",img:"assets/Peshawari_Paneer.jpg"},
// {name:"Veg Manchurian",price:14.99,category:"curry",img:"assets/veg-manchurian.jpg"},

/* RICE ITEMS */
{name:"Awadhi Biryani",price:13.99,category:"rice",img:"assets/awadhi_biryani.jpg"},
{name:"Tomato Rice",price:14.99,category:"rice",img:"assets/tomato_rice.jpg"},
{name:"Lemon Rice",price:13.99,category:"rice",img:"assets/lemon.jpg"},
{name:"Kabuli",price:6.99,category:"rice",img:"assets/kabuli.jpg"},
{name:"Tawa Pulao",price:8.99,category:"rice",img:"assets/tawa_pulao.jpg"},

/* soup*/
{name:"Tomato soup",price:3.99,category:"soup",img:"assets/tomato_soup.jpg"},
{name:"Manchow soup (will contain mushrooms)",price:4.99,category:"soup",img:"assets/manchow.jpg"},
{name:"Vegetable sweet corn soup",price:4.99,category:"soup",img:"assets/sweetcorn.jpg"},
// {name:"Garlic Cheese Naan",price:5.99,category:"soup",img:"assets/cheese-naan.jpg"},
// {name:"Plain Paratha",price:3.99,category:"breads",img:"assets/paratha.jpg"},
// {name:"Tandoori Roti",price:2.99,category:"breads",img:"assets/tandoori-roti.jpg"},

/* Daal */
{name:"Daal Makhani",price:9.99,category:"Daal",img:"assets/Dal_Makhani.jpg"},
{name:"Daal Bukhara",price:9.99,category:"Daal",img:"assets/bakhura.jpg"},
{name:"Channa Daal",price:10.99,category:"Daal",img:"assets/chana.jpg"},
// {name:"Mix Veg Paratha",price:10.99,category:"breads",img:"assets/mix-paratha.jpg"},
// {name:"Hariyali Paneer Paratha",price:11.99,category:"breads",img:"assets/hariyali-paratha.jpg"},
// {name:"Hariyali Cheese Paratha",price:11.99,category:"breads",img:"assets/cheese-paratha.jpg"},
// {name:"Garlic Cheese Chilli Paratha",price:10.99,category:"breads",img:"assets/garlic-paratha.jpg"},
// {name:"Whole Wheat Roti (2pcs)",price:2.50,category:"breads",img:"assets/wheat-roti.jpg"},

/* bread */
{name:"Roti",price:12.99,category:"bread",img:"assets/roti.jpg"},
{name:"Puri",price:14.99,category:"bread",img:"assets/puri.jpg"},
{name:"Naan",price:13.99,category:"bread",img:"assets/naan.jpg"},
// {name:"Paneer Kathi Roll",price:14.99,category:"main",img:"assets/kathi-roll.jpg"},
// {name:"Paneer Tikka Burrito",price:14.99,category:"main",img:"assets/burrito.jpg"},
// {name:"Cheesy Paneer Sliders",price:14.99,category:"main",img:"assets/sliders.jpg"},
// {name:"Veggie Cheese Pasta",price:14.99,category:"main",img:"assets/pasta.jpg"},

/* DRINKS */
{name:"Aam Ka Panna",price:5.99,category:"drinks",img:"assets/aam.jpg"},
{name:"Lemonade",price:5.99,category:"drinks",img:"assets/lemonade.jpg"},
{name:"Mango Lassi",price:5.99,category:"drinks",img:"assets/mango.jpg"},
{name:"Fruit Punch (Guava / Watermelon/ Orange)",price:5.99,category:"drinks",img:"assets/mixed.jpg"},
{name:"Chai",price:3.99,category:"drinks",img:"assets/chai.jpg"},
{name:"Coffee",price:7.99,category:"drinks",img:"assets/coffee.jpg"},
{name:"Chanch",price:5.99,category:"drinks",img:"assets/chanchal.jpg"},
{name:"Thandai",price:7.99,category:"drinks",img:"assets/thandai.jpg"},
{name:"Roohafaza",price:5.99,category:"drinks",img:"assets/Roohafaza.jpg"},

/* DESSERT */
{name:"Rabdi",price:12.99,category:"desserts",img:"assets/rabdi.jpg"},
{name:"Gajar Halwa",price:8.99,category:"desserts",img:"assets/gajar.jpg"},
{name:"Ras Malai",price:5.99,category:"desserts",img:"assets/rasmalai.jpg"},
{name:"Gulab Jamun",price:7.99,category:"desserts",img:"assets/gulab.jpg"},
{name:"Custard",price:6.99,category:"desserts",img:"assets/custard.jpg"},
{name:"Kheer",price:12.99,category:"desserts",img:"assets/kheera.jpg"},
{name:"Phirni",price:8.99,category:"desserts",img:"assets/phirni.jpg"},
{name:"Sooji Halwa",price:5.99,category:"desserts",img:"assets/sooji.jpg"},
{name:"Jalebi",price:7.99,category:"desserts",img:"assets/jalebi.jpg"},
{name:"Srikhand",price:6.99,category:"desserts",img:"assets/shrikhand.jpg"},



/* Combo offers */

// {name:"Gulkand Kheer",price:6.99,category:"Combos",img:"assets/kheer.jpg"},


/* Sukhi Sabzi */
{name:"Masala Bhendi",price:12.99,category:"Sukhi Sabzi",img:"assets/bhendi.jpg"},
{name:"Bagara Baingan",price:14.99,category:"Sukhi Sabzi",img:"assets/bagara.jpg"},
{name:"Aloo gobi (dry)",price:16.99,category:"Sukhi Sabzi",img:"assets/aloo_gobi.jpg"},
{name:"Papad methi Sabzi",price:16.99,category:"Sukhi Sabzi",img:"assets/papad_mehti.jpg"},
// {name:"Paneer Khurchan",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Paneer Malai Kofta",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Paneer Lababdar",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Kavani Paneer",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Paneer Korma",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Bhindi Do Pyaza",price:14.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Veg Diwani handi",price:15.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Adraki Alu Gobi",price:15.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Soya Chaap Ceviry",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Amritsari Choley",price:14.99,category:"subz Bahar",img:"assets/kheer.jpg"},
// {name:"Martbaan Kathal",price:16.99,category:"subz Bahar",img:"assets/kheer.jpg"},

];