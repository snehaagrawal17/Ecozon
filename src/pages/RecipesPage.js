// RecipesPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/pages/RecipesPage.css';
import { useCart } from '../context/CartContext';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { items } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Get ingredients from cart items
    const getIngredientsFromCart = () => {
      const ingredients = [];
      items.forEach(item => {
        if (item.type === 'subscription' && item.addOns) {
          item.addOns.forEach(addOn => {
            ingredients.push(addOn.name);
          });
        }
      });
      return ingredients;
    };

    const fetchRecipes = async () => {
      setLoading(true);
      const ingredients = getIngredientsFromCart();
      
      if (ingredients.length === 0) {
        setRecipes([]);
        setLoading(false);
        return;
      }

      try {
        // Mock API call to Gemini (in a real app, this would be an actual API call)
        // Simulating a delay for API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample recipes based on common farm ingredients
        const mockRecipes = [
          {
            id: 1,
            title: "Fresh Garden Salad",
            description: "A refreshing salad made with farm-fresh ingredients",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Bell Peppers", "Carrots", "Olive Oil", "Balsamic Vinegar"],
            steps: [
              "Wash and chop all vegetables",
              "Combine in a large bowl",
              "Drizzle with olive oil and balsamic vinegar",
              "Toss gently and serve immediately"
            ],
            prepTime: "15 minutes",
            difficulty: "Easy"
          },
          {
            id: 2,
            title: "Roasted Vegetable Medley",
            description: "Seasonal vegetables roasted to perfection",
            image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            ingredients: ["Potatoes", "Carrots", "Zucchini", "Onions", "Garlic", "Rosemary", "Olive Oil", "Salt", "Pepper"],
            steps: [
              "Preheat oven to 425°F (220°C)",
              "Wash and chop all vegetables into similar-sized pieces",
              "Toss with olive oil, minced garlic, rosemary, salt, and pepper",
              "Spread on a baking sheet in a single layer",
              "Roast for 30-35 minutes, stirring halfway through",
              "Serve hot as a side dish or over grains"
            ],
            prepTime: "45 minutes",
            difficulty: "Medium"
          },
          {
            id: 3,
            title: "Berry Smoothie Bowl",
            description: "A nutritious breakfast bowl with fresh berries",
            image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            ingredients: ["Strawberries", "Blueberries", "Banana", "Greek Yogurt", "Honey", "Granola", "Chia Seeds"],
            steps: [
              "Blend frozen berries, banana, and yogurt until smooth",
              "Pour into a bowl",
              "Top with fresh berries, granola, and a drizzle of honey",
              "Sprinkle with chia seeds",
              "Serve immediately"
            ],
            prepTime: "10 minutes",
            difficulty: "Easy"
          }
        ];
        
        setRecipes(mockRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [items]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  };

  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <h1>Farm-to-Table Recipes</h1>
        <p>Delicious recipes based on your farm subscription items</p>
      </div>

      {loading ? (
        <div className="recipes-loading">
          <div className="spinner"></div>
          <p>Finding perfect recipes for your ingredients...</p>
        </div>
      ) : recipes.length === 0 ? (
        <div className="no-recipes">
          <h2>No ingredients found</h2>
          <p>Add farm products to your cart to get personalized recipe suggestions</p>
          <button className="browse-farms-btn" onClick={() => navigate('/farms')}>
            Browse Farms
          </button>
        </div>
      ) : (
        <div className="recipes-content">
          {selectedRecipe ? (
            <div className="recipe-detail">
              <button className="back-btn" onClick={() => setSelectedRecipe(null)}>
                ← Back to recipes
              </button>
              
              <div className="recipe-hero">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} />
                <div className="recipe-hero-overlay">
                  <h2>{selectedRecipe.title}</h2>
                  <div className="recipe-meta">
                    <span>Prep time: {selectedRecipe.prepTime}</span>
                    <span>Difficulty: {selectedRecipe.difficulty}</span>
                  </div>
                </div>
              </div>
              
              <div className="recipe-description">
                <p>{selectedRecipe.description}</p>
              </div>
              
              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol className="steps">
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index} className="step-item">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <>
              <div className="recipes-intro">
                <h2>Recipes suggested for your items</h2>
                <p>Click on any recipe to view detailed instructions</p>
              </div>
              
              <div className="recipes-grid">
                {recipes.map(recipe => (
                  <div 
                    key={recipe.id} 
                    className="recipe-card"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <div className="recipe-image">
                      <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className="recipe-info">
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <div className="recipe-tags">
                        <span>{recipe.prepTime}</span>
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="recipe-chatbot-container">
        <RecipeChatbot />
      </div>
    </div>
  );
};

// Recipe Chatbot Component
const RecipeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your recipe assistant. Tell me what ingredients you have or what you'd like to cook!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const { items } = useCart();
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    // Clear input
    setInput('');
    
    // Simulate thinking
    setTimeout(async () => {
      // Get ingredients from cart
      const ingredients = [];
      items.forEach(item => {
        if (item.type === 'subscription' && item.addOns) {
          item.addOns.forEach(addOn => {
            ingredients.push(addOn.name);
          });
        }
      });

      // Generate response based on user input
      let botResponse;
      const userInput = input.toLowerCase();
      
      if (userInput.includes('ingredient') || userInput.includes('what can i make')) {
        if (ingredients.length > 0) {
          botResponse = `Based on your cart, you have: ${ingredients.join(', ')}. You could make a delicious salad, stir-fry, or smoothie with these ingredients!`;
        } else {
          botResponse = "I don't see any ingredients in your cart yet. Add some farm products to get personalized suggestions!";
        }
      } else if (userInput.includes('recipe') || userInput.includes('how to make')) {
        botResponse = "I can suggest recipes based on ingredients! Try asking me 'What can I make with my ingredients?' or tell me what specific dish you're interested in.";
      } else if (userInput.includes('salad')) {
        botResponse = "For a fresh salad, wash and chop your vegetables, combine in a bowl, and dress with olive oil, vinegar, salt, and pepper. Add nuts or cheese for extra flavor!";
      } else if (userInput.includes('smoothie')) {
        botResponse = "For a delicious smoothie, blend your favorite fruits with yogurt or milk. Add honey for sweetness and ice for a refreshing chill!";
      } else {
        botResponse = "That sounds interesting! For more specific recipe suggestions, try adding farm-fresh ingredients to your cart, or ask me about a particular dish you'd like to make.";
      }

      // Add bot response
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '👨‍🍳'}
      </button>
      
      <div className={`recipe-chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Recipe Assistant</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about recipes..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default RecipesPage;