 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Recipe — World recipe discovery with authentic origins, ingredients, cooking methods, and community reviews.">
  <title>Recipe — World Recipe Discovery</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- NAV -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a class="logo" href="#home"><em>Recipe</em></a>
      <ul class="nav-links">
        <li><a href="#discover">Discover</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#discover" onclick="App.resetFilters()">All Cuisines</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn-ghost" onclick="App.openRandom()">Surprise Me</button>
        <button class="btn-primary" onclick="document.getElementById('discover').scrollIntoView({behavior:'smooth'})">Browse Recipes</button>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="hero-content">
      <span class="hero-eyebrow">22 Recipes · 11 Cuisines · 1 Platform</span>
      <h1>Discover the Art of<br><em>World Cuisine</em></h1>
      <p>Hand-curated recipes with authentic origins, step-by-step methods, nutritional benefits, and real community reviews.</p>
      <div class="hero-actions">
        <button class="btn-hero-primary" onclick="document.getElementById('discover').scrollIntoView({behavior:'smooth'})">
          Explore Recipes <span>→</span>
        </button>
        <button class="btn-hero-ghost" onclick="App.openRandom()">Random Recipe</button>
      </div>
      <div class="hero-stats">
        <div class="hstat"><span class="hstat-n">22+</span><span class="hstat-l">Recipes</span></div>
        <div class="hstat-div"></div>
        <div class="hstat"><span class="hstat-n">11</span><span class="hstat-l">Cuisines</span></div>
        <div class="hstat-div"></div>
        <div class="hstat"><span class="hstat-n">4.8★</span><span class="hstat-l">Avg Rating</span></div>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-grid" id="heroGrid"></div>
    </div>
  </section>

  <!-- DISCOVER -->
  <section class="discover-section" id="discover">
    <div class="container">

      <div class="search-wrapper">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="search" id="searchInput" placeholder="Search by name, ingredient, or cuisine…"
            oninput="App.filterRecipes()" autocomplete="off">
          <button class="search-clear" id="searchClear" onclick="App.clearSearch()" style="display:none">✕</button>
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-row">
          <span class="filter-label">Diet</span>
          <div class="filter-chips" id="dietChips">
            <button class="chip active"      data-diet="all"     onclick="App.setDiet(this)">All</button>
            <button class="chip veg-chip"    data-diet="veg"     onclick="App.setDiet(this)">🥦 Vegetarian</button>
            <button class="chip nonveg-chip" data-diet="non-veg" onclick="App.setDiet(this)">🍗 Non-Vegetarian</button>
          </div>
        </div>
        <div class="filter-row">
          <span class="filter-label">Cuisine</span>
          <div class="filter-chips" id="cuisineChips">
            <button class="chip active" data-cuisine="all"         onclick="App.setCuisine(this)">🍽 All</button>
            <button class="chip"        data-cuisine="Chinese"      onclick="App.setCuisine(this)">🇨🇳 Chinese</button>
            <button class="chip"        data-cuisine="North Indian" onclick="App.setCuisine(this)">🇮🇳 North Indian</button>
            <button class="chip"        data-cuisine="South Indian" onclick="App.setCuisine(this)">🌴 South Indian</button>
            <button class="chip"        data-cuisine="Italian"      onclick="App.setCuisine(this)">🇮🇹 Italian</button>
            <button class="chip"        data-cuisine="French"       onclick="App.setCuisine(this)">🇫🇷 French</button>
            <button class="chip"        data-cuisine="Russian"      onclick="App.setCuisine(this)">🇷🇺 Russian</button>
            <button class="chip"        data-cuisine="American"     onclick="App.setCuisine(this)">🇺🇸 American</button>
            <button class="chip"        data-cuisine="European"     onclick="App.setCuisine(this)">🌍 European</button>
            <button class="chip"        data-cuisine="Western"      onclick="App.setCuisine(this)">🍴 Western</button>
            <button class="chip"        data-cuisine="Healthy"      onclick="App.setCuisine(this)">🥗 Healthy</button>
            <button class="chip"        data-cuisine="Traditional"  onclick="App.setCuisine(this)">🏺 Traditional</button>
          </div>
        </div>
      </div>

      <div class="results-bar">
        <span id="resultsCount">Showing 22 recipes</span>
        <div class="sort-row">
          <label for="sortSelect">Sort:</label>
          <select id="sortSelect" onchange="App.filterRecipes()">
            <option value="default">Featured</option>
            <option value="rating">Highest Rated</option>
            <option value="time">Quickest First</option>
            <option value="calories">Lowest Calories</option>
          </select>
        </div>
      </div>

      <div class="recipe-grid" id="recipeGrid"></div>

      <div class="no-results" id="noResults" style="display:none">
        <span>🔍</span>
        <h3>No recipes found</h3>
        <p>Try adjusting your filters or search term.</p>
        <button class="btn-primary" onclick="App.resetFilters()">Reset Filters</button>
      </div>

    </div>
  </section>

  <!-- ABOUT -->
  <section class="about-strip" id="about">
    <div class="container about-inner">
      <div class="about-text">
        <h2>Crafted for <em>Food Lovers</em></h2>
        <p>Every recipe is curated for authenticity. We document the true origins, traditional methods, and nutritional profiles of dishes from across the globe.</p>
        <div class="about-points">
          <div class="ap"><span>🌍</span><div><strong>Authentic Origins</strong><p>Real culinary history behind every dish.</p></div></div>
          <div class="ap"><span>👨‍🍳</span><div><strong>Step-by-Step Methods</strong><p>Professional techniques explained simply.</p></div></div>
          <div class="ap"><span>💬</span><div><strong>Community Reviews</strong><p>Honest feedback from home cooks worldwide.</p></div></div>
          <div class="ap"><span>💚</span><div><strong>Nutritional Insights</strong><p>Health benefits and full macro breakdowns.</p></div></div>
        </div>
      </div>
      <div class="about-emojis" aria-hidden="true">
        <div class="emoji-mosaic" id="emojiMosaic"></div>
      </div>
    </div>
  </section>

  <footer>
    <strong>Recipe</strong><br>
    World cuisine, curated with care.
  </footer>

  <!-- MODAL -->
  <div class="overlay" id="overlay" role="dialog" aria-modal="true" aria-label="Recipe detail">
    <div class="modal" id="modal">
      <div id="modalInner"></div>
    </div>
  </div>

  <div class="toast" id="toast" role="alert" aria-live="assertive"></div>

  <!-- Scripts: data must load first -->
  <script src="data.js"></script>
  <script src="reviews.js"></script>
  <script src="app.js"></script>

</body>
</html>
