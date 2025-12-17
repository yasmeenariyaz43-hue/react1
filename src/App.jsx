// App.jsx
import MessageCard from './MessageCard1';

function App() {
  const cardData = [
    { id: 1, title: "Welcome", message: "Welcome to our new React application!" },
    { id: 2, title: "Updates", message: "We have updated the UI for better performance." },
    { id: 3, title: "Alert", message: "Please save your progress before logging out." },
    { id: 4, title: "Success", message: "Your profile has been updated successfully." }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardData.map((card) => (
        <MessageCard 
          key={card.id} 
          title={card.title} 
          message={card.message} 
        />
      ))}
    </div>
  );
}

export default App;
