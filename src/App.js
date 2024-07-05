import "./App.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const city = [
  {
    id: 1001,
    country: "Australia",
    capitalcity: " 🏙 - Canbara 💴- Australian Dollar- AU$ ",
  },
  {
    id: 1002,
    country: "Brazil",
    capitalcity: "🏙- Brasilia 💴- Brazilian Real- R$ ",
  },
  {
    id: 1003,
    country: "China",
    capitalcity: "🏙- Bejing 💴- Chinese Yuan- CN¥ ",
  },
  {
    id: 1004,
    country: "Denmark",
    capitalcity: "🏙- Copenhagen 💴- Danish Krone- DKK ",
  },
  {
    id: 1005,
    country: "Egypt",
    capitalcity: "🏙- Cairo 💴- Egyptian Pound- E£ ",
  },
  {
    id: 1006,
    country: "France",
    capitalcity: "🏙- Paris 💴- French Franc- ₣ ",
  },
  {
    id: 1007,
    country: "Germany",
    capitalcity: "🏙- Berlin 💴- euro-  € ",
  },
  {
    id: 1008,
    country: "Hungary",
    capitalcity: "🏙- Budapest 💴- Hungarian Forint- HUF ",
  },
  {
    id: 1009,
    country: "Italy",
    capitalcity: "🏙- Rome 💴- Italian lira- ITL  ",
  },

  {
    id: 1010,
    country: "Japan",
    capitalcity: "🏙- Tokyo 💴- Japanese Yen- ¥ ",
  },
  {
    id: 1011,
    country: "Kuwait",
    capitalcity: "🏙- Kuwait city 💴- Kuwaiti Dinar- KWD ",
  },
  {
    id: 1012,
    country: "Libia",
    capitalcity: "🏙- Tripoli 💴- Libyan Dinar- LYD ",
  },
  {
    id: 1013,
    country: "Malaysia",
    capitalcity: "🏙- Kuala Lumpur 💴- Malaysian Ringgit- RM ",
  },
  {
    id: 1014,
    country: "Netherlands",
    capitalcity: "🏙- Amsterdam 💴- euro-  € ",
  },
  {
    id: 1015,
    country: "Oman",
    capitalcity: "🏙- Muscat 💴- Omani Rial- OMR ",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {city.map((city) => (
        <div
          key={city.id}
          onClick={() => handleClick(city.id)}
          className={city.id === selectedId ? "selected" : ""}
        >
          <span>
            {city.id === selectedId ? city.capitalcity : city.country}
          </span>
        </div>
      ))}
    </div>
  );
}
