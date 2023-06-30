import "./App.css";
// import Card1 from "./Card1.js";
// import Card2 from "./Card2.js";
import CardsArr from "./data";
import Card from "./Card";

export default function App() {
  // console.log(CardsArr)
  const cards = CardsArr.map((card, index) => {
    return (
      <Card
        key={index}
        img={card.img}
        title={card.title}
        text={card.text}
        url={card.url}
      />
    );
  });

  return (
    <div className="App">
      <h1>Bootstrap Cards to Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}
