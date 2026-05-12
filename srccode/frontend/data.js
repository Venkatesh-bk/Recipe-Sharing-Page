// ─────────────────────────────────────────────────────────────────
//  SAVEUR  ·  Recipe Data
//  Cuisines: Chinese | North Indian | South Indian | Italian |
//            French | Russian | American | European | Western |
//            Healthy | Traditional
//  Diet:     veg | non-veg
// ─────────────────────────────────────────────────────────────────

const RECIPES = [

  /* ── 1. CHINESE ──────────────────────────────────────────── */
  {
    id: 1,
    name: "Kung Pao Chicken",
    emoji: "🐓",
    bg: "linear-gradient(135deg,#ff6b35,#f7931e)",
    cuisine: "Chinese",
    diet: "non-veg",
    tags: ["spicy","quick","wok","stir-fry"],
    time: "25 min", servings: 3, difficulty: "Medium",
    calories: 380, rating: 4.7, ratingCount: 142,
    description: "A fiery Sichuan stir-fry of tender chicken, dried chilies, crunchy peanuts, and scallions in a bold, glossy sauce.",
    origin: "Sichuan Province, China",
    originStory: "Kung Pao Chicken (宫保鸡丁) is named after Ding Baozhen, a Qing dynasty governor of Sichuan in the 1800s who loved this dish. After his death, the imperial court granted him the honorary title 'Gong Bao' (Palatial Guardian), and the signature dish of his table was named in his memory. It became one of China's most internationally recognised dishes by the 20th century.",
    ingredients: [
      "500g chicken breast, cubed", "8–10 dried red chilies",
      "3 tbsp soy sauce", "2 tbsp Shaoxing rice wine",
      "1 tbsp hoisin sauce", "1 tsp dark soy sauce",
      "1 tsp cornstarch", "2 tsp Sichuan peppercorns",
      "4 garlic cloves, minced", "1-inch ginger, julienned",
      "100g roasted peanuts", "5 spring onions",
      "2 tbsp vegetable oil", "1 tsp sesame oil",
      "1 tsp sugar", "1 tsp rice vinegar"
    ],
    steps: [
      "Marinate cubed chicken in soy sauce, Shaoxing wine, and cornstarch for 15 minutes.",
      "Mix sauce: hoisin, dark soy, sugar, vinegar, and 2 tbsp water. Set aside.",
      "Heat wok until smoking. Add oil, fry dried chilies and Sichuan peppercorns 30 seconds.",
      "Add chicken. Stir-fry on high heat 3–4 minutes until golden.",
      "Push chicken aside; add garlic and ginger. Stir-fry 30 seconds.",
      "Pour sauce over. Toss on high heat 1 minute.",
      "Add spring onions and peanuts. Drizzle sesame oil. Serve over steamed rice."
    ],
    benefits: [
      "💪 38g protein per serving from chicken",
      "🥜 Heart-healthy unsaturated fats from peanuts",
      "🌶️ Capsaicin in chilies boosts metabolism",
      "🧄 Allicin in garlic strengthens immunity"
    ],
    nutrition: { protein: "38g", carbs: "22g", fat: "16g", fiber: "2g" }
  },

  {
    id: 2,
    name: "Vegetable Spring Rolls",
    emoji: "🥢",
    bg: "linear-gradient(135deg,#43cea2,#185a9d)",
    cuisine: "Chinese",
    diet: "veg",
    tags: ["crispy","snack","appetizer","quick"],
    time: "30 min", servings: 4, difficulty: "Easy",
    calories: 220, rating: 4.5, ratingCount: 98,
    description: "Golden, shatteringly crisp parcels filled with seasoned cabbage, carrots, mushrooms, and glass noodles.",
    origin: "Eastern China",
    originStory: "Spring rolls trace back to the Eastern Jin dynasty (265–420 AD), where thin pancakes filled with fresh spring vegetables were eaten to celebrate the Lunar New Year — representing good fortune and prosperity. The deep-fried version popular today emerged during the Tang dynasty and spread across Southeast Asia through Chinese diaspora communities.",
    ingredients: [
      "12 spring roll wrappers", "200g shredded cabbage",
      "2 carrots, julienned", "100g shiitake mushrooms, sliced",
      "80g glass noodles (soaked)", "3 spring onions",
      "2 garlic cloves, minced", "2 tbsp soy sauce",
      "1 tsp sesame oil", "1 tsp oyster-style sauce",
      "Salt & white pepper", "Oil for deep frying",
      "Sweet chili sauce to serve"
    ],
    steps: [
      "Soak glass noodles in hot water 5 minutes, drain, and cut into short lengths.",
      "Stir-fry garlic, then add cabbage, carrots, and mushrooms on high heat 3 minutes.",
      "Add noodles, soy sauce, sesame oil, and seasoning. Toss well. Cool completely.",
      "Place 2 tbsp filling on each wrapper. Fold sides in, roll tightly, seal with water.",
      "Heat oil to 180°C. Fry rolls in batches 3–4 minutes until deep golden.",
      "Drain on paper towels. Serve immediately with sweet chili sauce."
    ],
    benefits: [
      "🥦 Fibre-rich vegetables support digestion",
      "🍄 Shiitake mushrooms boost immune function",
      "🌿 Low calorie — 220 kcal per serving",
      "🧠 B-vitamins from mushrooms support brain health"
    ],
    nutrition: { protein: "6g", carbs: "34g", fat: "8g", fiber: "4g" }
  },

  /* ── 2. NORTH INDIAN ─────────────────────────────────────── */
  {
    id: 3,
    name: "Butter Chicken",
    emoji: "🍗",
    bg: "linear-gradient(135deg,#f7971e,#ffd200)",
    cuisine: "North Indian",
    diet: "non-veg",
    tags: ["creamy","comfort","mild","popular"],
    time: "45 min", servings: 4, difficulty: "Easy",
    calories: 430, rating: 4.9, ratingCount: 312,
    description: "Grilled tandoori chicken simmered in a velvety, mildly spiced tomato-butter sauce — India's most beloved curry worldwide.",
    origin: "Delhi, India",
    originStory: "Murgh Makhani (Butter Chicken) was born in 1948 at Moti Mahal restaurant in Daryaganj, Delhi, by Kundan Lal Gujral. He and fellow cook Kundan Lal Jaggi reportedly began simmering leftover tandoori chicken in a rich tomato, butter, and cream sauce to keep it moist. The dish became globally iconic and is credited with introducing Indian cuisine to the world.",
    ingredients: [
      "700g chicken thighs", "1 cup plain yogurt", "2 tbsp tandoori spice mix",
      "400g crushed tomatoes", "4 tbsp butter", "1 cup heavy cream",
      "2 onions, diced", "4 garlic cloves", "1-inch ginger",
      "1 tsp garam masala", "1 tsp kasuri methi (dried fenugreek)",
      "1 tsp sugar", "Salt to taste", "Fresh coriander to garnish"
    ],
    steps: [
      "Marinate chicken in yogurt and tandoori spice for minimum 2 hours.",
      "Grill or broil marinated chicken until charred. Set aside.",
      "Melt butter in a heavy pan. Sauté onions until deep golden (15 min).",
      "Add garlic, ginger. Cook 2 minutes. Add crushed tomatoes. Simmer 15 minutes.",
      "Blend sauce smooth; strain back into pan for silkiest result.",
      "Add cream, grilled chicken, garam masala, and sugar. Simmer 10 minutes.",
      "Crush kasuri methi between palms; stir in. Garnish with coriander and cream swirl."
    ],
    benefits: [
      "💪 High lean protein from chicken thighs",
      "🔥 Fenugreek leaf regulates blood sugar",
      "🍅 Lycopene in tomatoes reduces cancer risk",
      "🥛 Probiotics from yogurt marinade aid gut health"
    ],
    nutrition: { protein: "42g", carbs: "18g", fat: "22g", fiber: "3g" }
  },

  {
    id: 4,
    name: "Dal Makhani",
    emoji: "🫘",
    bg: "linear-gradient(135deg,#834d9b,#d04ed6)",
    cuisine: "North Indian",
    diet: "veg",
    tags: ["slow-cooked","comfort","protein","popular"],
    time: "4 hrs", servings: 6, difficulty: "Medium",
    calories: 310, rating: 4.8, ratingCount: 204,
    description: "Slow-simmered whole black lentils and kidney beans in a rich, smoky tomato-butter sauce — the crown jewel of Punjabi cuisine.",
    origin: "Punjab, India",
    originStory: "Dal Makhani originated at Moti Mahal, Delhi, alongside Butter Chicken. Kundan Lal Gujral slow-cooked black urad lentils overnight on dying embers — a technique called 'dum' — and enriched them with cream and butter. This slow-cook method was traditionally used by Punjabi farmers who left lentils simmering overnight, and the Moti Mahal version refined it into a restaurant masterpiece.",
    ingredients: [
      "250g whole black lentils (urad dal)", "50g kidney beans (rajma)",
      "3 tbsp butter + 1 tbsp oil", "2 onions, finely chopped",
      "4 garlic cloves, minced", "1-inch ginger, grated",
      "400g crushed tomatoes", "1 cup heavy cream",
      "1 tsp cumin seeds", "1 tsp garam masala",
      "1 tsp chili powder", "½ tsp smoked paprika",
      "Salt to taste", "Fresh coriander"
    ],
    steps: [
      "Soak lentils and kidney beans overnight. Pressure-cook with salt until completely soft (4–5 whistles).",
      "Mash a quarter of the cooked lentils to thicken the dal.",
      "Heat butter and oil; fry cumin seeds until spluttering.",
      "Add onions; cook until deep brown (20 min). Add garlic and ginger; cook 3 minutes.",
      "Add crushed tomatoes, chili powder, and paprika. Simmer 20 minutes until oil separates.",
      "Combine tomato masala with cooked lentils. Simmer on low heat 1–2 hours, stirring often.",
      "Stir in cream and garam masala. Garnish with butter and coriander."
    ],
    benefits: [
      "🌱 Complete plant protein — 16g per serving",
      "❤️ Black lentils support heart health",
      "🫘 High fibre aids cholesterol reduction",
      "🦴 Iron and calcium from lentils strengthen bones"
    ],
    nutrition: { protein: "16g", carbs: "40g", fat: "12g", fiber: "10g" }
  },

  /* ── 3. SOUTH INDIAN ─────────────────────────────────────── */
  {
    id: 5,
    name: "Masala Dosa",
    emoji: "🫓",
    bg: "linear-gradient(135deg,#f9d423,#f83600)",
    cuisine: "South Indian",
    diet: "veg",
    tags: ["crispy","breakfast","fermented","traditional"],
    time: "40 min", servings: 4, difficulty: "Medium",
    calories: 280, rating: 4.8, ratingCount: 176,
    description: "Paper-thin, lacey fermented rice crepe filled with spiced potato masala, served with coconut chutney and sambar.",
    origin: "Udupi, Karnataka, India",
    originStory: "Dosa originated in Udupi, Karnataka, with roots stretching back over 1,000 years, mentioned in Tamil Sangam literature. The Masala Dosa variant — stuffed with spiced potato — gained prominence in the Udupi restaurants of Mumbai in the early 20th century. Today it is South India's most iconic export and is listed among the world's 50 best foods.",
    ingredients: [
      "2 cups parboiled rice", "½ cup split urad dal",
      "1 tsp fenugreek seeds", "Salt + oil for cooking",
      "4 boiled potatoes, mashed", "1 onion, sliced",
      "2 green chilies", "1 tsp mustard seeds",
      "10 curry leaves", "½ tsp turmeric",
      "2 tbsp oil", "Fresh coriander",
      "Coconut chutney to serve", "Sambar to serve"
    ],
    steps: [
      "Soak rice, urad dal, and fenugreek seeds separately for 6 hours. Grind to a smooth batter; ferment overnight.",
      "Prepare filling: heat oil, add mustard seeds, curry leaves, and green chilies.",
      "Add sliced onions; cook until soft. Add turmeric and mashed potatoes. Mix well. Season.",
      "Heat a flat iron skillet. Pour a ladle of batter; spread in circles to form a thin, wide crepe.",
      "Drizzle oil around edges. Cook on medium-high until golden and crisp.",
      "Place potato filling in the centre; fold the dosa over it.",
      "Serve immediately with fresh coconut chutney and hot sambar."
    ],
    benefits: [
      "🦠 Fermented batter is probiotic-rich",
      "🌾 Rice and lentils together form a complete protein",
      "💛 Turmeric has powerful anti-inflammatory curcumin",
      "⚡ Complex carbohydrates provide sustained energy"
    ],
    nutrition: { protein: "9g", carbs: "52g", fat: "7g", fiber: "4g" }
  },

  {
    id: 6,
    name: "Chettinad Chicken Curry",
    emoji: "🍲",
    bg: "linear-gradient(135deg,#e96c00,#f5a623)",
    cuisine: "South Indian",
    diet: "non-veg",
    tags: ["spicy","aromatic","bold","traditional"],
    time: "55 min", servings: 4, difficulty: "Hard",
    calories: 490, rating: 4.7, ratingCount: 88,
    description: "An intensely aromatic, fiery chicken curry from the Chettinad region featuring kalpasi, marathi mokku, and freshly ground spices.",
    origin: "Chettinad, Tamil Nadu, India",
    originStory: "Chettinad cuisine developed among the Nattukotai Chettiars, a wealthy merchant community of Tamil Nadu's Karaikudi region. Their trade routes across Southeast Asia introduced spices like kalpasi (stone flower) and marathi mokku into Tamil cooking. The resulting cuisine is considered India's most spice-diverse and was largely unknown outside Tamil Nadu until the 1990s food renaissance.",
    ingredients: [
      "800g chicken, cut into pieces", "2 onions, finely chopped",
      "3 tomatoes, chopped", "4 tbsp oil",
      "2 tsp kalpasi (stone flower)", "1 tsp marathi mokku",
      "2 tsp black pepper, freshly ground", "4 dried red chilies",
      "1 tbsp coriander seeds", "1 tsp fennel seeds",
      "6 garlic cloves", "1-inch ginger",
      "2 sprigs curry leaves", "½ cup coconut milk", "Salt"
    ],
    steps: [
      "Dry-roast black pepper, coriander, fennel, kalpasi, marathi mokku, and red chilies; grind to a coarse powder.",
      "Heat oil; fry curry leaves then onions until deep golden.",
      "Add blended garlic-ginger paste; cook 3 minutes.",
      "Add tomatoes; cook until oil separates.",
      "Add the freshly ground spice powder; fry 2 minutes.",
      "Add chicken; sear on high heat 5 minutes. Add 1 cup water.",
      "Simmer 25 minutes. Stir in coconut milk; cook 5 more minutes. Rest before serving."
    ],
    benefits: [
      "🌿 Kalpasi and stone flower have antimicrobial properties",
      "🔥 Black pepper increases nutrient absorption (piperine)",
      "🥥 Medium-chain fatty acids from coconut milk",
      "💪 High-quality protein from free-range chicken"
    ],
    nutrition: { protein: "44g", carbs: "14g", fat: "26g", fiber: "3g" }
  },

  /* ── 4. ITALIAN ──────────────────────────────────────────── */
  {
    id: 7,
    name: "Spaghetti Carbonara",
    emoji: "🍝",
    bg: "linear-gradient(135deg,#f7d000,#e07b39)",
    cuisine: "Italian",
    diet: "non-veg",
    tags: ["creamy","classic","quick","comfort"],
    time: "25 min", servings: 2, difficulty: "Medium",
    calories: 520, rating: 4.9, ratingCount: 267,
    description: "A silky Roman pasta of guanciale, eggs, and Pecorino Romano — no cream needed. Pure technique, pure flavour.",
    origin: "Rome, Italy",
    originStory: "Carbonara's true origins are debated — the most compelling theory ties it to Italian charcoal workers (carbonai) who cooked this simple, satisfying dish on the job in the Apennine mountains. Others link it to post-WWII Roman trattorie influenced by American soldiers bringing bacon and eggs. By the 1950s it had become a quintessential Roman dish, fiercely protected against cream by every Roman nonna.",
    ingredients: [
      "200g spaghetti", "100g guanciale (or pancetta)",
      "2 large eggs + 2 egg yolks", "80g Pecorino Romano, finely grated",
      "30g Parmesan, grated", "Coarsely cracked black pepper", "Salt"
    ],
    steps: [
      "Cook spaghetti in generously salted boiling water until al dente. Reserve 1 cup pasta water.",
      "Meanwhile, fry diced guanciale in a cold skillet over medium heat until crispy and golden. Remove from heat.",
      "Whisk eggs, yolks, and grated cheeses together. Season heavily with black pepper.",
      "Add hot al-dente pasta to the guanciale skillet (off heat). Toss to coat.",
      "Pour egg-cheese mixture over pasta. Toss constantly, adding pasta water splash by splash to build a creamy, glossy sauce.",
      "The residual heat cooks the eggs — never return to direct heat or they will scramble.",
      "Serve immediately with extra Pecorino and a generous crack of black pepper."
    ],
    benefits: [
      "🥚 Complete amino acid profile from eggs",
      "🧀 Calcium and phosphorus from Pecorino",
      "⚡ Fast energy from al-dente complex carbs",
      "🐷 Iron and zinc from cured guanciale"
    ],
    nutrition: { protein: "28g", carbs: "58g", fat: "22g", fiber: "2g" }
  },

  {
    id: 8,
    name: "Margherita Pizza",
    emoji: "🍕",
    bg: "linear-gradient(135deg,#e74c3c,#c0392b)",
    cuisine: "Italian",
    diet: "veg",
    tags: ["classic","baked","comfort","quick"],
    time: "35 min", servings: 2, difficulty: "Medium",
    calories: 460, rating: 4.7, ratingCount: 198,
    description: "Naples' most iconic pizza — thin charred crust, San Marzano tomato, fresh mozzarella, and basil. Perfection in simplicity.",
    origin: "Naples, Italy",
    originStory: "Legend holds that in 1889, Neapolitan pizzaiolo Raffaele Esposito created this pizza for Queen Margherita of Savoy, using tomato, mozzarella, and basil to represent the Italian flag's red, white, and green. Whether the story is apocryphal or not, the Margherita has become the world's most recognised pizza and the benchmark by which all pizzas are judged.",
    ingredients: [
      "250g '00' flour (or bread flour)", "7g instant yeast",
      "160ml warm water", "1 tsp salt", "1 tsp sugar", "1 tbsp olive oil",
      "200g San Marzano tomatoes, crushed", "1 garlic clove",
      "200g fresh mozzarella, torn", "Fresh basil leaves",
      "Extra virgin olive oil to finish", "Sea salt flakes"
    ],
    steps: [
      "Mix flour, yeast, sugar, and salt. Add water and olive oil; knead 8 minutes until smooth. Rest 1 hour.",
      "Simmer crushed tomatoes with garlic and a pinch of salt for 10 minutes. Cool. Remove garlic.",
      "Preheat oven to maximum (250°C+) with a heavy baking stone or inverted tray inside.",
      "Stretch dough by hand into a thin, roughly 30cm circle — embrace imperfections.",
      "Spread tomato sauce thinly; scatter torn mozzarella. Do not overload.",
      "Bake 8–10 minutes until crust is puffed and charred in spots.",
      "Finish with fresh basil, sea salt, and a generous drizzle of extra virgin olive oil."
    ],
    benefits: [
      "🍅 High lycopene from cooked tomatoes",
      "🧀 Calcium and protein from fresh mozzarella",
      "🌿 Anti-inflammatory basil and olive oil",
      "🌾 Slow-release energy from fermented dough"
    ],
    nutrition: { protein: "22g", carbs: "62g", fat: "14g", fiber: "3g" }
  },

  /* ── 5. FRENCH ───────────────────────────────────────────── */
  {
    id: 9,
    name: "Croissants",
    emoji: "🥐",
    bg: "linear-gradient(135deg,#f7cac9,#92a8d1)",
    cuisine: "French",
    diet: "veg",
    tags: ["baked","pastry","weekend","breakfast"],
    time: "4 hrs", servings: 8, difficulty: "Hard",
    calories: 340, rating: 4.8, ratingCount: 154,
    description: "Laminated butter pastry with a shattering crust, honeycomb crumb, and a depth of flavour that takes patience to achieve.",
    origin: "Vienna & Paris, France",
    originStory: "The croissant's crescent shape traces to Austria's 'kipferl', but the laminated dough technique — alternating layers of dough and butter — was perfected by Viennese bakers who arrived in Paris in the 1830s. By the Belle Époque it had become synonymous with Parisian café culture. The French transformed an Austrian shape into a technical masterpiece requiring skill, cold butter, and precision.",
    ingredients: [
      "500g bread flour", "10g salt", "80g caster sugar",
      "7g instant yeast", "300ml cold whole milk",
      "280g unsalted butter, chilled (for laminating)",
      "1 egg + 1 tbsp milk (egg wash)"
    ],
    steps: [
      "Mix flour, salt, sugar, and yeast. Add cold milk; knead 5 minutes to form a slightly sticky dough. Refrigerate 1 hour.",
      "Pound cold butter between parchment into a flat 20×20cm slab. Keep cold but pliable.",
      "Roll dough into a rectangle twice the butter slab. Enclose butter; seal edges tightly.",
      "Roll to a long rectangle; perform a letter fold. Wrap; chill 30 minutes. Repeat twice more (3 folds total).",
      "Roll to 4mm thick; cut 12 tall triangles. Roll each from base to tip without pressing. Curve ends inward.",
      "Place on lined trays. Proof at room temperature 2–3 hours until noticeably puffed and jiggly.",
      "Brush gently with egg wash. Bake at 190°C for 16–18 minutes until deep mahogany."
    ],
    benefits: [
      "🦴 Calcium and Vitamin D from butter and milk",
      "⚡ Quick energy from refined carbohydrates",
      "😊 Mood-lifting serotonin precursors from wheat",
      "🧈 Fat-soluble vitamins A, D, E, K from butter"
    ],
    nutrition: { protein: "7g", carbs: "38g", fat: "18g", fiber: "1g" }
  },

  {
    id: 10,
    name: "Beef Bourguignon",
    emoji: "🥩",
    bg: "linear-gradient(135deg,#7b4397,#dc2430)",
    cuisine: "French",
    diet: "non-veg",
    tags: ["slow-cook","braised","elegant","winter"],
    time: "3 hrs", servings: 6, difficulty: "Hard",
    calories: 580, rating: 4.9, ratingCount: 121,
    description: "Burgundy wine-braised beef with pearl onions, lardons, and mushrooms — the French bistro classic perfected by Julia Child.",
    origin: "Burgundy (Bourgogne), France",
    originStory: "Beef Bourguignon is rooted in Burgundian peasant cooking — a practical method of tenderising tough beef cuts through slow braising in the region's celebrated Pinot Noir wine. The dish ascended from rustic origins to Parisian restaurant menus in the 20th century. Julia Child's 1961 televised version introduced it to American households and made it the defining dish of French home cooking abroad.",
    ingredients: [
      "1.5kg beef chuck or shin, cubed", "750ml Burgundy (Pinot Noir)",
      "200g lardons (bacon lardons)", "200g pearl onions",
      "300g button mushrooms", "3 carrots, sliced",
      "1 onion, diced", "4 garlic cloves",
      "2 tbsp tomato paste", "2 cups beef stock",
      "Bouquet garni (thyme, bay, parsley)", "2 tbsp flour",
      "3 tbsp butter + oil", "Salt & pepper"
    ],
    steps: [
      "Marinate beef in wine, carrots, garlic, and herbs overnight in the fridge.",
      "Remove beef; pat dry. Reserve marinade. Brown beef in batches in oil over high heat. Set aside.",
      "Fry lardons until golden. Remove. In same pot, cook diced onion 5 minutes.",
      "Return beef; add flour and stir to coat. Add reserved marinade, stock, and tomato paste.",
      "Bring to simmer; cover and cook in oven at 160°C for 2.5–3 hours until very tender.",
      "Meanwhile, sauté pearl onions and mushrooms separately in butter until golden.",
      "Add pearl onions and mushrooms to stew for final 30 minutes. Adjust seasoning and serve."
    ],
    benefits: [
      "🍷 Resveratrol from Burgundy wine is heart-protective",
      "💪 Collagen-rich braised beef supports joint health",
      "🥕 Beta-carotene from carrots supports vision",
      "🦠 Mushrooms provide immune-boosting beta-glucans"
    ],
    nutrition: { protein: "48g", carbs: "12g", fat: "28g", fiber: "3g" }
  },

  /* ── 6. RUSSIAN ──────────────────────────────────────────── */
  {
    id: 11,
    name: "Beef Stroganoff",
    emoji: "🫕",
    bg: "linear-gradient(135deg,#c94b4b,#4b134f)",
    cuisine: "Russian",
    diet: "non-veg",
    tags: ["creamy","comfort","quick","classic"],
    time: "35 min", servings: 4, difficulty: "Easy",
    calories: 510, rating: 4.6, ratingCount: 109,
    description: "Tender strips of sautéed beef in a tangy, creamy sour cream and mustard sauce — an aristocratic Russian classic.",
    origin: "St. Petersburg, Russia",
    originStory: "Beef Stroganoff appears in Russian cookbooks as early as the 1860s, attributed to the household of Count Pavel Alexandrovich Stroganov, a prominent St. Petersburg aristocrat. The dish spread globally after Russian émigrés fled the 1917 revolution, becoming particularly popular in the United States and China, where Chinese-Russian restaurants made it a staple dish.",
    ingredients: [
      "700g beef sirloin or fillet, thinly sliced",
      "1 onion, finely sliced", "300g button mushrooms, sliced",
      "2 garlic cloves", "250ml sour cream",
      "200ml beef stock", "2 tbsp Dijon mustard",
      "2 tbsp butter", "1 tbsp oil",
      "1 tbsp Worcestershire sauce", "1 tsp paprika",
      "Salt & pepper", "Fresh dill to garnish",
      "Egg noodles or rice to serve"
    ],
    steps: [
      "Season beef strips with salt and pepper. Sear in a very hot pan in batches — 1 minute per side. Set aside.",
      "In the same pan, cook onions in butter over medium heat until softened (5 min).",
      "Add garlic and mushrooms; cook until mushrooms release their liquid and it evaporates.",
      "Stir in paprika and Dijon mustard; cook 1 minute.",
      "Pour in beef stock and Worcestershire sauce. Simmer 5 minutes.",
      "Reduce heat to low; stir in sour cream until smooth. Do not boil after adding cream.",
      "Return beef to the sauce. Heat 2 minutes. Garnish with fresh dill; serve over noodles."
    ],
    benefits: [
      "💪 High protein beef supports muscle recovery",
      "🦠 Fermented sour cream contains probiotics",
      "🍄 Mushrooms provide potassium and B-vitamins",
      "🌿 Dill is rich in antioxidants and aids digestion"
    ],
    nutrition: { protein: "46g", carbs: "14g", fat: "30g", fiber: "2g" }
  },

  {
    id: 12,
    name: "Borscht",
    emoji: "🥣",
    bg: "linear-gradient(135deg,#e91e8c,#1e3c72)",
    cuisine: "Russian",
    diet: "veg",
    tags: ["hearty","soup","traditional","healthy"],
    time: "1 hr", servings: 6, difficulty: "Easy",
    calories: 210, rating: 4.5, ratingCount: 76,
    description: "A vibrant, deeply flavoured beetroot soup with cabbage, potato, and a dollop of sour cream — Eastern Europe's most iconic bowl.",
    origin: "Ukraine / Russia",
    originStory: "Borscht has been eaten in Eastern Europe for over 1,000 years, with origins in Ukraine, where it is considered a national dish. It spread through Imperial Russia and became one of the world's most recognised soups. The word 'borscht' comes from the ancient Slavic word for hogweed, an early ingredient. Today countless regional variations exist from Poland to Israel.",
    ingredients: [
      "3 medium beetroot, peeled & grated",
      "3 potatoes, diced", "¼ head cabbage, shredded",
      "2 carrots, grated", "1 onion, diced",
      "2 tomatoes, grated", "3 garlic cloves",
      "1.5L vegetable stock", "2 tbsp red wine vinegar",
      "2 tbsp tomato paste", "2 tbsp oil",
      "1 bay leaf", "Fresh dill", "Sour cream to serve"
    ],
    steps: [
      "Sauté onion and carrots in oil 5 minutes. Add grated tomatoes and tomato paste; cook 5 minutes.",
      "Add grated beetroot and vinegar; stir well. Cook 10 minutes until softened.",
      "Pour in stock. Add potatoes and bay leaf. Bring to boil; simmer 15 minutes.",
      "Add shredded cabbage; simmer 10 more minutes.",
      "Crush garlic into soup. Season with salt, pepper, and adjust vinegar for tartness.",
      "Remove bay leaf. Let rest 10 minutes before serving.",
      "Ladle into bowls; top with sour cream and abundant fresh dill."
    ],
    benefits: [
      "❤️ Betalains in beetroot lower blood pressure",
      "🩸 High folate from beets supports cell production",
      "🥬 Cabbage is rich in Vitamin C and K",
      "🦠 Fermented sour cream provides gut-friendly bacteria"
    ],
    nutrition: { protein: "5g", carbs: "38g", fat: "6g", fiber: "7g" }
  },

  /* ── 7. AMERICAN ─────────────────────────────────────────── */
  {
    id: 13,
    name: "BBQ Baby Back Ribs",
    emoji: "🍖",
    bg: "linear-gradient(135deg,#d31027,#ea384d)",
    cuisine: "American",
    diet: "non-veg",
    tags: ["smoky","BBQ","weekend","indulgent"],
    time: "3 hrs", servings: 4, difficulty: "Medium",
    calories: 690, rating: 4.8, ratingCount: 186,
    description: "Fall-off-the-bone pork ribs with a caramelised spice rub and sticky homemade barbecue glaze. The ultimate American cookout experience.",
    origin: "Memphis / Kansas City, USA",
    originStory: "American barbecue ribs have deep roots in the traditions of enslaved African Americans in the South, who transformed cheap cuts into culinary masterpieces through slow-smoking techniques. Memphis and Kansas City developed distinct styles in the early 20th century — dry-rubbed vs sauce-glazed. Today BBQ ribs represent American comfort food culture at its most iconic.",
    ingredients: [
      "2 racks baby back pork ribs", "2 tbsp brown sugar",
      "1 tbsp smoked paprika", "1 tsp garlic powder",
      "1 tsp onion powder", "1 tsp cumin",
      "½ tsp cayenne", "Salt & black pepper",
      "BBQ Sauce: 200ml ketchup, 60ml apple cider vinegar",
      "3 tbsp brown sugar", "2 tbsp Worcestershire sauce",
      "1 tbsp Dijon mustard", "1 tsp smoked paprika"
    ],
    steps: [
      "Remove the silverskin membrane from the back of the ribs.",
      "Mix all dry rub spices; coat both sides of ribs generously. Refrigerate 2–24 hours.",
      "Preheat oven to 150°C. Wrap ribs tightly in foil; bake 2.5 hours.",
      "Make BBQ sauce: simmer all sauce ingredients 15 minutes until thickened.",
      "Unwrap ribs carefully. Brush generously with BBQ sauce.",
      "Raise oven to 220°C (or fire up the grill). Cook ribs 15 minutes, basting twice, until caramelised.",
      "Rest 5 minutes; slice between bones. Serve with extra sauce and sides."
    ],
    benefits: [
      "💪 High protein content — 42g per serving",
      "🦴 Bone-in ribs are rich in collagen and minerals",
      "🔥 Smoked paprika contains capsanthin antioxidants",
      "🍎 Apple cider vinegar aids digestion"
    ],
    nutrition: { protein: "42g", carbs: "28g", fat: "38g", fiber: "1g" }
  },

  {
    id: 14,
    name: "Classic Mac & Cheese",
    emoji: "🧀",
    bg: "linear-gradient(135deg,#f7971e,#ffd200)",
    cuisine: "American",
    diet: "veg",
    tags: ["comfort","baked","creamy","family"],
    time: "40 min", servings: 6, difficulty: "Easy",
    calories: 520, rating: 4.6, ratingCount: 142,
    description: "Creamy béchamel-based pasta baked with a golden breadcrumb crust — homemade American mac & cheese at its finest.",
    origin: "United States",
    originStory: "Mac & Cheese has colonial American origins — Thomas Jefferson reportedly encountered a similar dish in France and served 'macaroni pie' at a White House dinner in 1802. The dish exploded in popularity when Kraft introduced the boxed version in 1937, a year after the Great Depression began. Homemade versions with béchamel and aged cheddar have experienced a renaissance in modern American cooking.",
    ingredients: [
      "400g elbow macaroni", "4 tbsp butter",
      "4 tbsp plain flour", "600ml whole milk",
      "200ml heavy cream", "300g sharp cheddar, grated",
      "100g Gruyère, grated", "1 tsp Dijon mustard",
      "½ tsp cayenne pepper", "½ tsp garlic powder",
      "Salt & white pepper",
      "100g panko breadcrumbs", "2 tbsp melted butter (for topping)"
    ],
    steps: [
      "Cook macaroni in salted water until very al dente (1 minute less than package). Drain.",
      "Melt butter in large saucepan; add flour. Cook stirring 2 minutes to make a roux.",
      "Gradually whisk in milk and cream until smooth. Simmer until thickened (5 min).",
      "Remove from heat; stir in cheeses, mustard, cayenne, and garlic powder. Season well.",
      "Combine sauce with pasta. Pour into a greased baking dish.",
      "Mix panko with melted butter; sprinkle over top.",
      "Bake at 180°C for 25 minutes until golden and bubbling at edges."
    ],
    benefits: [
      "🦴 Calcium-rich from cheddar and Gruyère",
      "🌾 B-vitamins from enriched pasta",
      "💪 Complete protein from dairy and wheat together",
      "😊 Comfort food that genuinely supports mood"
    ],
    nutrition: { protein: "24g", carbs: "56g", fat: "26g", fiber: "2g" }
  },

  /* ── 8. EUROPEAN ─────────────────────────────────────────── */
  {
    id: 15,
    name: "Spanish Paella",
    emoji: "🥘",
    bg: "linear-gradient(135deg,#f7971e,#e74c3c)",
    cuisine: "European",
    diet: "non-veg",
    tags: ["saffron","seafood","rice","weekend"],
    time: "55 min", servings: 6, difficulty: "Hard",
    calories: 560, rating: 4.8, ratingCount: 167,
    description: "Valencia's iconic saffron-scented rice dish with prawns, mussels, and chicken, crowned by the prized caramelised socarrat crust.",
    origin: "Valencia, Spain",
    originStory: "Paella is a Valencian dialect word for frying pan. Traditional paella began as a lunchtime meal for Valencian farmers, made with rabbit, snails, and vegetables cooked over orange wood fires in the fields. Seafood variants emerged in Valencia's coastal communities. The dish became internationally recognised in the 20th century as Spain's national dish, though Valencians insist theirs is the only authentic version.",
    ingredients: [
      "400g bomba or paella rice", "1 pinch saffron threads",
      "12 prawns, shell-on", "500g mussels, cleaned",
      "4 chicken thighs", "200g squid rings",
      "1 onion", "4 garlic cloves",
      "2 tomatoes, grated", "1 red pepper, sliced",
      "1.2L hot fish/chicken stock", "100ml white wine",
      "2 tsp smoked paprika", "1 tsp sweet paprika",
      "100ml olive oil", "Lemon wedges & parsley"
    ],
    steps: [
      "Steep saffron in 2 tbsp warm stock for 10 minutes.",
      "Heat olive oil in a wide paella pan. Brown chicken thighs; remove and set aside.",
      "Sear squid and prawns briefly; remove. In same oil, fry onion and peppers 8 minutes.",
      "Add garlic and grated tomatoes; cook 5 minutes until sauce darkens (sofrito).",
      "Add paprika; stir 30 seconds. Add rice; coat in sofrito for 2 minutes.",
      "Pour in wine; let it absorb. Add hot stock and saffron water. Place chicken on top. Simmer uncovered — do not stir.",
      "After 15 minutes, add prawns and mussels on top. Cook 8–10 more minutes. Rest 5 minutes for the socarrat to form."
    ],
    benefits: [
      "🌊 Omega-3 fatty acids from seafood",
      "🌼 Saffron's crocin reduces oxidative stress",
      "🫒 Heart-healthy monounsaturated fats from olive oil",
      "🍚 Bomba rice is high in resistant starch"
    ],
    nutrition: { protein: "44g", carbs: "64g", fat: "18g", fiber: "3g" }
  },

  {
    id: 16,
    name: "Ratatouille",
    emoji: "🫑",
    bg: "linear-gradient(135deg,#56ab2f,#a8e063)",
    cuisine: "European",
    diet: "veg",
    tags: ["healthy","baked","summer","traditional"],
    time: "1 hr", servings: 4, difficulty: "Easy",
    calories: 190, rating: 4.6, ratingCount: 88,
    description: "A Provençal roasted vegetable medley of courgette, aubergine, and tomato, perfumed with herbes de Provence. Simple. Sublime.",
    origin: "Provence, France",
    originStory: "Ratatouille is a traditional Provençal dish from Nice, first recorded in the 18th century. Its name comes from the French 'touiller' (to toss food). Farmers would slow-stew seasonal summer vegetables together in olive oil — a practical way to use abundant harvests. The dish became globally famous through the 2007 Pixar film, which depicted a tian (layered) presentation of the classic stew.",
    ingredients: [
      "1 large aubergine, cubed", "2 courgettes, sliced",
      "2 red peppers, chopped", "4 ripe tomatoes, chopped",
      "1 onion, diced", "4 garlic cloves",
      "100ml extra virgin olive oil", "1 tsp dried thyme",
      "1 tsp dried rosemary", "1 bay leaf",
      "Fresh basil to finish", "Salt & pepper"
    ],
    steps: [
      "Salt aubergine cubes; rest 20 minutes then rinse and pat dry.",
      "Heat olive oil in a heavy pot. Fry aubergine in batches until golden. Remove.",
      "In the same pot, cook onion 8 minutes. Add garlic and peppers; cook 5 minutes.",
      "Add tomatoes, thyme, rosemary, and bay leaf. Simmer 10 minutes.",
      "Add aubergine and courgette; season well.",
      "Cover and simmer 25 minutes, stirring occasionally, until all vegetables are very tender.",
      "Remove lid; cook 5 minutes to reduce. Finish with fresh basil and olive oil."
    ],
    benefits: [
      "🍆 Aubergine nasunin fights oxidative damage",
      "🌶️ Vitamins C and A from bell peppers",
      "🫒 Polyphenols from extra virgin olive oil",
      "🌿 Quercetin from onion and garlic is anti-inflammatory"
    ],
    nutrition: { protein: "4g", carbs: "22g", fat: "10g", fiber: "8g" }
  },

  /* ── 9. WESTERN ──────────────────────────────────────────── */
  {
    id: 17,
    name: "Grilled Ribeye Steak",
    emoji: "🥩",
    bg: "linear-gradient(135deg,#1a1a2e,#e94560)",
    cuisine: "Western",
    diet: "non-veg",
    tags: ["grilled","quick","high-protein","premium"],
    time: "20 min", servings: 2, difficulty: "Medium",
    calories: 620, rating: 4.9, ratingCount: 203,
    description: "A well-marbled ribeye, seared to a perfect crust and basted with garlic herb butter — steak at its most elemental.",
    origin: "United States / Western Europe",
    originStory: "The ribeye steak has its origins in British and French butchery traditions, where the 'entrecôte' (between the ribs cut) was prized for its marbling. In America, the cattle culture of Texas and the Midwest elevated steak to cultural icon status in the 19th century. The development of cast-iron cooking and then charcoal grills defined the modern American steakhouse tradition.",
    ingredients: [
      "2 ribeye steaks (300g each, 2.5cm thick)",
      "2 tbsp neutral oil (avocado or grapeseed)",
      "100g unsalted butter", "4 garlic cloves, crushed",
      "4 sprigs fresh thyme", "3 sprigs fresh rosemary",
      "Coarse sea salt", "Cracked black pepper",
      "Watercress or rocket to serve"
    ],
    steps: [
      "Remove steak from fridge 45 minutes before cooking. Pat completely dry with paper towels.",
      "Season generously on all sides with coarse salt and cracked pepper.",
      "Heat a heavy cast-iron skillet until smoking over high heat. Add oil.",
      "Lay steak away from you into the pan. Sear 2–3 minutes per side for medium-rare — press down for even contact.",
      "Reduce heat to medium. Add butter, garlic, thyme, and rosemary. As butter foams, continuously baste steak.",
      "Remove when internal temperature reaches 54°C (medium-rare). Rest on a wire rack 5 minutes.",
      "Slice against the grain. Serve on warmed plates with pan juices and fresh greens."
    ],
    benefits: [
      "💪 One of the most bioavailable protein sources",
      "🔬 High creatine naturally supports muscle function",
      "🩸 Haem iron is more absorbable than plant iron",
      "🧠 B12, zinc, and selenium support brain and thyroid"
    ],
    nutrition: { protein: "54g", carbs: "0g", fat: "42g", fiber: "0g" }
  },

  {
    id: 18,
    name: "Caesar Salad",
    emoji: "🥗",
    bg: "linear-gradient(135deg,#2c6e49,#4c956c)",
    cuisine: "Western",
    diet: "veg",
    tags: ["fresh","quick","lunch","classic"],
    time: "20 min", servings: 2, difficulty: "Easy",
    calories: 280, rating: 4.5, ratingCount: 132,
    description: "Crisp romaine, hand-made Caesar dressing, house croutons, and shaved Parmesan — an American icon with surprising Mexican origins.",
    origin: "Tijuana, Mexico / California",
    originStory: "Caesar Salad was invented by Italian-Mexican restaurateur Caesar Cardini in 1924 at his Tijuana restaurant, allegedly improvised on a busy 4th of July weekend when supplies were running low. American tourists crossing the border spread its fame, and it became a Hollywood staple. The original recipe was tossed tableside with raw egg, lemon, Worcestershire sauce, and good olive oil.",
    ingredients: [
      "2 heads romaine lettuce, torn", "100g Parmesan, shaved",
      "2 slices thick sourdough bread, cubed (croutons)",
      "3 tbsp extra virgin olive oil", "1 garlic clove",
      "Dressing: 1 egg yolk", "1 tsp Dijon mustard",
      "1 tbsp Worcestershire sauce", "2 tbsp lemon juice",
      "1 garlic clove, minced", "80ml extra virgin olive oil",
      "30g Parmesan, finely grated", "Salt & pepper"
    ],
    steps: [
      "Make croutons: toss bread cubes with olive oil and a crushed garlic clove. Bake at 200°C 12 minutes until golden.",
      "Whisk egg yolk, Dijon, Worcestershire, lemon juice, and garlic together.",
      "Slowly drizzle in olive oil, whisking constantly to emulsify into a thick dressing.",
      "Stir in grated Parmesan; season assertively with salt and pepper.",
      "Toss romaine generously in dressing — every leaf should be coated.",
      "Arrange on plates. Top with croutons and shaved Parmesan.",
      "Finish with extra lemon zest and cracked pepper."
    ],
    benefits: [
      "🥬 Romaine is rich in Vitamins K and A",
      "🧀 Parmesan is calcium and protein-dense",
      "🫒 Olive oil provides heart-protective oleocanthal",
      "🍋 Vitamin C from fresh lemon juice"
    ],
    nutrition: { protein: "14g", carbs: "22g", fat: "18g", fiber: "4g" }
  },

  /* ── 10. HEALTHY ─────────────────────────────────────────── */
  {
    id: 19,
    name: "Quinoa Buddha Bowl",
    emoji: "🥙",
    bg: "linear-gradient(135deg,#11998e,#38ef7d)",
    cuisine: "Healthy",
    diet: "veg",
    tags: ["nutritious","quick","meal-prep","gluten-free"],
    time: "30 min", servings: 2, difficulty: "Easy",
    calories: 420, rating: 4.7, ratingCount: 119,
    description: "A nourishing bowl of fluffy quinoa, roasted sweet potato, edamame, avocado, and tahini dressing — a complete meal in one.",
    origin: "Modern Wellness Cuisine",
    originStory: "The Buddha Bowl concept emerged from Western health-food culture in the early 2010s, inspired by the Buddhist tradition of monks carrying bowls to collect plant-based foods. The name evokes a rounded, overflowing bowl like the belly of a laughing Buddha. It embodies the modern nutritional principle of building meals around a grain base with diverse colourful plant foods.",
    ingredients: [
      "200g quinoa", "1 sweet potato, cubed",
      "100g frozen edamame, shelled", "1 avocado",
      "100g kale or spinach", "1 can chickpeas, drained",
      "2 tbsp olive oil", "1 tsp cumin", "1 tsp smoked paprika",
      "Tahini Dressing: 3 tbsp tahini, 2 tbsp lemon juice",
      "1 garlic clove, 1 tbsp olive oil, 2–3 tbsp warm water",
      "Salt to taste"
    ],
    steps: [
      "Cook quinoa: rinse, then simmer in 400ml water 15 minutes. Rest 5 minutes; fluff with fork.",
      "Toss sweet potato and chickpeas in olive oil, cumin, and paprika. Roast at 200°C 25 minutes.",
      "Blanch edamame in salted water 3 minutes; drain.",
      "Massage kale with a pinch of salt and 1 tsp olive oil until softened.",
      "Make tahini dressing: whisk tahini, lemon, garlic, and olive oil. Thin with warm water to a drizzleable consistency.",
      "Assemble bowls: quinoa base, then arrange sweet potato, edamame, avocado, chickpeas, and kale in sections.",
      "Drizzle tahini dressing generously. Garnish with sesame seeds and lemon wedge."
    ],
    benefits: [
      "🌱 Quinoa is a complete protein with all 9 amino acids",
      "🧡 Sweet potato is rich in beta-carotene",
      "🥑 Avocado provides folate and heart-healthy fats",
      "🫘 Chickpeas are high in fibre and plant protein"
    ],
    nutrition: { protein: "22g", carbs: "58g", fat: "18g", fiber: "14g" }
  },

  {
    id: 20,
    name: "Grilled Salmon & Asparagus",
    emoji: "🐟",
    bg: "linear-gradient(135deg,#0f3443,#34e89e)",
    cuisine: "Healthy",
    diet: "non-veg",
    tags: ["omega-3","quick","light","nutritious"],
    time: "20 min", servings: 2, difficulty: "Easy",
    calories: 390, rating: 4.8, ratingCount: 145,
    description: "Crispy-skinned salmon fillet with lemon-herb grilled asparagus and a bright dill yogurt sauce — fast, elegant, deeply nourishing.",
    origin: "Nordic / Pacific Northwest",
    originStory: "Salmon has been the cornerstone of indigenous Pacific Northwest diets for thousands of years, revered by cultures including the Haida and Chinook. Nordic countries have grilled and smoked salmon for millennia. The modern grilled salmon with vegetables emerged from the clean-eating movement of the 1980s–90s and became a staple of health-conscious fine dining worldwide.",
    ingredients: [
      "2 salmon fillets (200g each), skin-on",
      "1 bunch asparagus, trimmed",
      "3 tbsp olive oil", "1 lemon (zest + juice)",
      "2 garlic cloves, minced", "1 tbsp fresh dill",
      "Salt & cracked pepper",
      "Dill Sauce: 150g Greek yogurt",
      "2 tbsp fresh dill", "1 tbsp lemon juice",
      "1 tsp Dijon mustard", "Salt"
    ],
    steps: [
      "Pat salmon dry. Score the skin with a sharp knife 3 times to prevent curling.",
      "Rub salmon with olive oil, garlic, lemon zest, salt, and pepper. Rest 10 minutes.",
      "Toss asparagus with olive oil, salt, and pepper.",
      "Make dill sauce: mix all sauce ingredients; refrigerate.",
      "Heat a non-stick or cast-iron pan until very hot. Place salmon skin-side down; press gently.",
      "Cook 4 minutes skin-side down without moving. Flip; cook 2 more minutes. Rest off heat.",
      "Grill asparagus in the same pan 3–4 minutes. Serve with lemon juice and dill sauce."
    ],
    benefits: [
      "🧠 DHA omega-3s support brain and heart health",
      "💪 28g complete protein from salmon",
      "🌿 Asparagus is rich in folate and prebiotic inulin",
      "🦠 Greek yogurt provides probiotics"
    ],
    nutrition: { protein: "44g", carbs: "10g", fat: "22g", fiber: "4g" }
  },

  /* ── 11. TRADITIONAL ─────────────────────────────────────── */
  {
    id: 21,
    name: "Shakshuka",
    emoji: "🍳",
    bg: "linear-gradient(135deg,#f7b733,#fc4a1a)",
    cuisine: "Traditional",
    diet: "veg",
    tags: ["quick","brunch","spiced","one-pan"],
    time: "25 min", servings: 2, difficulty: "Easy",
    calories: 280, rating: 4.8, ratingCount: 176,
    description: "Eggs poached in a smoky, cumin-scented tomato and pepper sauce, topped with crumbled feta and herbs. One pan. Fifteen minutes.",
    origin: "North Africa / Levant",
    originStory: "Shakshuka's origins lie in North Africa — most likely in Libya or Tunisia, where a similar tomato-pepper-egg stew has been made for centuries. The word may derive from the Berber or Arabic word for 'mixed' or 'shaken'. Sephardic Jewish communities carried it to Israel, where it became a national breakfast institution. Its global popularity exploded in the 2010s through food media.",
    ingredients: [
      "4 large eggs", "400g crushed tomatoes",
      "2 red bell peppers, diced", "1 onion, diced",
      "3 garlic cloves, minced", "1 tsp ground cumin",
      "1 tsp smoked paprika", "½ tsp coriander",
      "¼ tsp chili flakes", "100g feta cheese",
      "3 tbsp olive oil", "Fresh parsley & mint",
      "Crusty bread or pita to serve"
    ],
    steps: [
      "Heat olive oil in a wide skillet. Sauté onion and peppers 8 minutes until softened.",
      "Add garlic and all spices; cook 1 minute until fragrant.",
      "Pour in crushed tomatoes; simmer 10 minutes until sauce thickens. Season with salt.",
      "Make 4 wells in the sauce. Crack an egg into each well.",
      "Cover and cook on low heat 5–7 minutes until whites are set but yolks remain runny.",
      "Crumble feta over the top. Scatter fresh herbs.",
      "Serve directly from the pan with bread for dipping."
    ],
    benefits: [
      "🍅 Lycopene from cooked tomatoes reduces cancer risk",
      "🥚 Eggs provide choline for brain development",
      "🫒 Anti-inflammatory polyphenols from olive oil",
      "🌶️ Capsaicin in peppers boosts circulation"
    ],
    nutrition: { protein: "18g", carbs: "24g", fat: "16g", fiber: "5g" }
  },

  {
    id: 22,
    name: "Moroccan Lamb Tagine",
    emoji: "🫙",
    bg: "linear-gradient(135deg,#c94b4b,#e07b39)",
    cuisine: "Traditional",
    diet: "non-veg",
    tags: ["slow-cook","aromatic","warming","exotic"],
    time: "2.5 hrs", servings: 6, difficulty: "Medium",
    calories: 540, rating: 4.9, ratingCount: 97,
    description: "Slow-braised lamb with preserved lemon, olives, saffron, and Ras el Hanout — the warmth of Marrakech in a single pot.",
    origin: "Morocco, North Africa",
    originStory: "The tagine takes its name from the distinctive conical clay pot in which it is cooked, used since at least the 9th century in North Africa. The cooking vessel's design traps steam to keep meat tender in the desert climate. Moroccan tagine developed at the crossroads of Berber, Arab, and Andalusian culinary traditions, incorporating spices from the ancient Silk Road trading routes through Marrakech.",
    ingredients: [
      "1.2kg lamb shoulder, cut into chunks",
      "2 onions, diced", "4 garlic cloves",
      "1-inch fresh ginger, grated", "2 preserved lemon quarters",
      "100g green olives", "400ml lamb or chicken stock",
      "1 tbsp Ras el Hanout spice blend", "1 tsp turmeric",
      "1 tsp cumin", "1 tsp coriander",
      "Large pinch saffron", "3 tbsp olive oil",
      "Fresh coriander & mint", "Couscous to serve"
    ],
    steps: [
      "Steep saffron in 3 tbsp warm water for 10 minutes.",
      "Brown lamb in batches in olive oil in a tagine or heavy casserole. Set aside.",
      "Sauté onions in same pot 8 minutes. Add garlic and ginger; cook 2 minutes.",
      "Add Ras el Hanout, turmeric, cumin, and coriander; fry 1 minute.",
      "Return lamb; add stock, saffron water, and preserved lemon (squeezed). Stir well.",
      "Cover tightly; cook on lowest heat 1.5–2 hours until lamb is meltingly tender.",
      "Add olives for final 20 minutes. Adjust seasoning; scatter fresh coriander and mint. Serve over couscous."
    ],
    benefits: [
      "🦴 Slow-cooked bone-in lamb is rich in collagen",
      "🌿 Saffron's crocin is a potent antioxidant",
      "🍋 Preserved lemon provides Vitamin C and probiotics",
      "🫒 Olives provide heart-healthy oleic acid"
    ],
    nutrition: { protein: "46g", carbs: "20g", fat: "28g", fiber: "4g" }
  }

]; // end RECIPES
