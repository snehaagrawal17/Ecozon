export const initialState = {
  items: [], 
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Calculate new total when adding an item
      const newTotal = state.total + (action.payload.totalPrice || action.payload.price || 0);
      
      return {
        ...state,
        items: [...state.items, action.payload],
        total: newTotal,
      };
      
    case 'REMOVE_ITEM':
      // Find the item to be removed
      const itemToRemove = state.items.find(item => item.id === action.payload);
      // Calculate the price to subtract
      const priceToSubtract = itemToRemove ? (itemToRemove.totalPrice || itemToRemove.price || 0) : 0;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - priceToSubtract,
      };
      
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
}