import React, { useState } from 'react';
import "../style/CookBook.css";

// Sample data for recipes
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    imageUrl: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "100g pancetta",
      "350g spaghetti",
      "2 large eggs",
      "1/2 cup grated Parmesan cheese",
      "Black pepper"
    ],
    instructions: [
      "Boil the pasta.",
      "Fry the pancetta until it's crispy.",
      "Beat the eggs and mix with Parmesan.",
      "Mix everything in a bowl with hot pasta.",
      "Serve with a sprinkle of pepper and cheese."
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    imageUrl: "https://via.placeholder.com/150",
    description: "A popular Indian curry recipe with marinated chicken pieces in a spiced creamy sauce.",
    ingredients: [
      "500g chicken breast",
      "1 cup yogurt",
      "1 tbsp lemon juice",
      "2 tsp turmeric",
      "2 tbsp garam masala",
      "1 cup heavy cream"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices.",
      "Grill the chicken until done.",
      "Prepare the sauce with cream and tomatoes.",
      "Mix chicken into the sauce and simmer.",
      "Serve with rice."
    ]
  },
  {
    id: 3,
    title: "Vegetarian Chili",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "A hearty and spicy vegetarian chili packed with vegetables and beans.",
    ingredients: [
      "1 tbsp olive oil",
      "1 large onion, chopped",
      "2 bell peppers, chopped",
      "3 garlic cloves, minced",
      "2 tbsp chili powder",
      "1 tbsp cumin",
      "1 tbsp paprika",
      "1 can diced tomatoes",
      "1 can kidney beans, drained",
      "1 can black beans, drained",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat. Add onions and bell peppers, cook until soft.",
      "Add garlic, chili powder, cumin, and paprika. Cook for 1 minute until fragrant.",
      "Stir in tomatoes and bring to a simmer.",
      "Add beans and simmer for 30 minutes. Season with salt and pepper.",
      "Serve hot, garnished with cilantro or cheese if desired."
    ]
  },
  {
    id: 4,
    title: "Classic Beef Stroganoff",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "A traditional Russian dish featuring sautéed pieces of beef served in a sauce with sour cream.",
    ingredients: [
      "500g beef sirloin, thinly sliced",
      "2 tbsp butter",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 cup mushrooms, sliced",
      "1 tbsp flour",
      "1 cup beef broth",
      "1 cup sour cream",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
    ],
    instructions: [
      "In a large skillet, melt butter over medium-high heat and cook the beef until browned. Remove and set aside.",
      "In the same skillet, add onion and mushrooms. Cook until soft.",
      "Stir in garlic and flour, cook for 1 minute. Slowly add beef broth, stirring continuously.",
      "Return beef to the skillet. Reduce heat to low and stir in sour cream. Cook until heated through but do not boil.",
      "Season with salt and pepper. Serve over noodles or rice, garnished with parsley."
    ]
  },
  {
    id: 5,
    title: "Lemon Drizzle Cake",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "A moist and tangy lemon cake with a sweet, lemony drizzle.",
    ingredients: [
      "225g unsalted butter, softened",
      "225g caster sugar",
      "4 eggs",
      "225g self-raising flour",
      "Zest of 1 lemon",
      "For the drizzle:",
      "Juice of 1½ lemons",
      "85g caster sugar"
    ],
    instructions: [
      "Preheat the oven to 180°C. Grease and line a loaf tin.",
      "Cream together butter and sugar until pale and fluffy.",
      "Gradually add eggs, mixing well after each addition. If the mixture starts to curdle, add a little flour.",
      "Fold in the remaining flour and lemon zest, then pour into the prepared tin.",
      "Bake for 45-50 minutes until a skewer inserted in the center comes out clean.",
      "For the drizzle: Mix lemon juice and sugar. While the cake is still warm, poke holes with a skewer and pour over the drizzle.",
      "Let the cake cool in the tin before serving."
    ]
  },
  {
    id: 6,
    title: "Shrimp Scampi",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "Quick and easy shrimp scampi, a garlic buttery shrimp dish served over pasta or rice.",
    ingredients: [
      "500g large shrimp, peeled and deveined",
      "Salt and freshly ground black pepper",
      "2 tbsp olive oil",
      "8 cloves garlic, finely minced",
      "1/2 cup dry white wine",
      "Juice of 1 lemon",
      "100g butter",
      "2 tbsp chopped fresh parsley",
      "Grated Parmesan cheese (optional)"
    ],
    instructions: [
      "Season the shrimp with salt and pepper.",
      "Heat the olive oil in a large pan over medium-high heat. Add the shrimp and cook until pink, about 2-3 minutes. Remove from pan and set aside.",
      "Add the garlic to the pan and sauté until fragrant, about 1 minute.",
      "Pour in the white wine and lemon juice, bring to a simmer.",
      "Add the butter and parsley, stirring until the butter has melted.",
      "Return the shrimp to the pan and toss to combine.",
      "Serve immediately over cooked pasta or rice, topped with grated Parmesan if desired."
    ]
  },
  {
    id: 7,
    title: "Caprese Salad",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "A simple Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.",
    ingredients: [
      "4 large ripe tomatoes, sliced",
      "200g fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Salt and black pepper",
      "Balsamic glaze (optional)"
    ],
    instructions: [
      "Arrange the tomato and mozzarella slices on a platter, alternating them and overlapping slightly.",
      "Tuck whole basil leaves between the slices.",
      "Drizzle the salad with olive oil and season with salt and pepper.",
      "If desired, add a drizzle of balsamic glaze before serving."
    ]
  },
  {
    id: 8,
    title: "Vegan Tacos",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "Easy and delicious tacos filled with a spicy tofu mixture, fresh salsa, and avocado.",
    ingredients: [
      "200g tofu, crumbled",
      "1 tbsp olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp paprika",
      "1/2 tsp chili powder",
      "Fresh salsa",
      "Avocado slices",
      "Corn tortillas",
      "Lime wedges"
    ],
    instructions: [
      "Heat the olive oil in a pan over medium heat. Add the onion and garlic, sauté until softened.",
      "Add the crumbled tofu and spices. Cook until the tofu is golden and crispy.",
      "Warm the tortillas in a dry pan or microwave.",
      "Assemble the tacos by filling the tortillas with the tofu mixture, topped with fresh salsa and avocado slices.",
      "Serve with lime wedges on the side."
    ]
  },
  {
    id: 9,
    title: "Avocado Toast",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "Simple yet delicious avocado toast topped with poached eggs and a sprinkle of chili flakes.",
    ingredients: [
      "2 slices of bread, toasted",
      "1 ripe avocado",
      "2 eggs",
      "Salt and pepper to taste",
      "Chili flakes (optional)",
      "Fresh herbs (optional)"
    ],
    instructions: [
      "Mash the avocado and spread it evenly on the toasted bread slices.",
      "Poach the eggs to your liking and place on top of the mashed avocado.",
      "Season with salt, pepper, and chili flakes if using.",
      "Garnish with fresh herbs if desired."
    ]
  },
  {
    id: 10,
    title: "Chocolate Mousse",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
    description: "Rich and creamy chocolate mousse made with just a few simple ingredients.",
    ingredients: [
      "200g dark chocolate, chopped",
      "3 eggs, separated",
      "1/4 cup sugar",
      "1 cup heavy cream",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Melt the chocolate over a double boiler or in the microwave. Let it cool slightly.",
      "Whisk the egg yolks and sugar together until pale and fluffy.",
      "In a separate bowl, whip the cream with vanilla until it forms soft peaks.",
      "Fold the melted chocolate into the egg yolk mixture, then gently fold in the whipped cream.",
      "In another bowl, beat the egg whites until stiff peaks form, and fold into the chocolate mixture.",
      "Spoon the mousse into serving dishes and refrigerate for at least 2 hours before serving."
    ]
  },
  {
    id: 11,
    title: "Smoked Salmon Avocado Toast",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image; replace with your own image URL
    description: "Elevate your breakfast with this gourmet avocado toast, topped with smoked salmon and capers.",
    ingredients: [
      "2 slices of whole-grain bread, toasted",
      "1 ripe avocado",
      "100g smoked salmon",
      "1 tablespoon capers",
      "Fresh dill for garnish",
      "Lemon wedges for serving",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Mash the avocado in a bowl and season with salt and pepper.",
      "Spread the mashed avocado evenly on the toasted bread slices.",
      "Top each slice with smoked salmon and sprinkle capers over the salmon.",
      "Garnish with dill and serve with a wedge of lemon on the side."
    ]
  },
  {
    id: 12,
    title: "Classic Tiramisu",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image; replace with your own image URL
    description: "A no-bake dessert that layers coffee-soaked ladyfingers with a creamy mascarpone mixture, topped with a dusting of cocoa powder.",
    ingredients: [
      "1 cup strong espresso, cooled",
      "6 egg yolks",
      "3/4 cup granulated sugar",
      "1 pound mascarpone cheese",
      "1 1/2 cups heavy cream",
      "24 ladyfingers",
      "Unsweetened cocoa powder, for dusting",
      "Chocolate shavings (optional), for garnish"
    ],
    instructions: [
      "In a large bowl, whisk egg yolks and sugar until well blended and creamy.",
      "Add mascarpone cheese to the egg mixture and beat until smooth.",
      "In a separate bowl, whip the heavy cream until stiff peaks form, then fold into the mascarpone mixture.",
      "Dip half of the ladyfingers quickly into the espresso and lay them in a single layer in a dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat with another layer of espresso-dipped ladyfingers and mascarpone mixture.",
      "Chill in the refrigerator for at least 4 hours, or overnight.",
      "Dust with cocoa powder before serving and garnish with chocolate shavings if desired."
    ]
  },  
  
];

// GridItem component for each recipe in the grid view
const GridItem = ({ recipe, onClick }) => {
    return (
        <div className="grid-item" onClick={() => onClick(recipe.id)}>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <div className="title-overlay">{recipe.title}</div>
        </div>
    );
};

// Recipe component
const Recipe = ({ recipe, onPrev, onNext, onBackToGrid }) => {
    return (
        <div className="recipe-detail">
          <h2>{recipe.title}</h2>
          <img src={recipe.imageUrl} alt={recipe.title} />
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Cooking Instructions:</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="navigation-buttons">
            <button onClick={onPrev}>&lt;</button>
            <button onClick={onBackToGrid}>Back to Recipes</button>
            <button onClick={onNext}>&gt;</button>
          </div>
        </div>
    );
};

// CookBook component
const CookBook = () => {
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const [view, setView] = useState('grid'); // 'grid' or 'recipe'

    const handleRecipeClick = (id) => {
        setCurrentRecipeIndex(recipes.findIndex(r => r.id === id));
        setView('recipe');
    };

    const handleNext = () => {
        setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    };

    const handlePrev = () => {
        setCurrentRecipeIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : recipes.length - 1);
    };

    const handleBackToGrid = () => {
        setView('grid');
    };

    return (
        <div className="cookbook-container">
            {view === 'grid' ? (
                <>
                    <h1 className="cookbook-heading">Welcome to My Recipe Book</h1>
                    <div className="grid-view">
                        {recipes.map(recipe => (
                            <GridItem key={recipe.id} recipe={recipe} onClick={handleRecipeClick} />
                        ))}
                    </div>
                </>
            ) : (
                <Recipe
                recipe={recipes[currentRecipeIndex]}
                onPrev={handlePrev}
                onNext={handleNext}
                onBackToGrid={handleBackToGrid}
                />
            )}
        </div>
    );
};

export default CookBook;
