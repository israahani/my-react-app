import React from 'react'; // Import the React library
import './App.css'; // Import CSS file for styling (if needed)
import Checkout from './Checkout'; 
function App() {
  const handleCheckout = () => {
    Checkout(); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <button onClick={handleCheckout}>Checkout</button> {/* Button to trigger checkout */}
      </header>
    </div>
  );
}
export default App;
