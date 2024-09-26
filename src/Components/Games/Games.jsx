import React, { useState, useEffect } from "react";

const gamesData = [
  {
    id: 1,
    title: "Baccarat",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Baccarat.png",
    description:
      "Baccarat is a comparing card game played between two hands, the Player and the Banker. Each Baccarat coup has three possible outcomes: 'player', 'banker', and 'tie'.",
  },
  {
    id: 2,
    title: "Roulette",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Roulette.png",
    description:
      "Roulette is a popular casino game that originated in France in the 18th century. The game is played on a wheel that is divided into numbered pockets, ranging from 0 to 36. The objective of the game is to predict where the ball will land on the spinning wheel.",
  },
  {
    id: 3,
    title: "Andar Bahar",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Andar-bahar-1.png",
    description:
      "Andar Bahar, also known as Katti, is a popular card game from India that is often played in casinos and online gaming platforms. The game is played with a single deck of cards and can be played by any number of players.",
  },
  {
    id: 4,
    title: "5 Card Poker",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/5-card-poker-1.png",
    description:
      "Five Card Poker, also known as Five Card Draw, is a classic poker game that is played with a standard deck of 52 cards. The game can be played by 2 to 6 players, and the objective is to have the best five-card hand at the end of the game.",
  },
  {
    id: 5,
    title: "Blackjack",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Blackjack.png",
    description:
      "Blackjack is a popular card game where players aim to have a hand value closer to 21 than the dealer's hand without going over. Numbered cards are worth their face value, face cards are worth 10, and Aces can be worth 1 or 11. Getting a total of 21 with an Ace and a 10-value card results in a Blackjack, an automatic win.",
  },
  {
    id: 6,
    title: "Texas Holdem",
    image: "https://bigdaddy.in/wp-content/uploads/2023/06/282A6893.jpg",
    description:
      "A variation of classic poker, each player seeks the best five card poker hand from a total of 7 available cards on the table.",
  },
  {
    id: 7,
    title: "3 Card Poker",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/3-card-poker.png",
    description:
      "Three card poker is a casino table game based on poker. It is the most profitable proprietary table game ever.",
  },
  {
    id: 8,
    title: "Casino War",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/casino-war-1.png",
    description:
      "By far one of the easiest casino games out there, Casino War is played with the player against the dealer. The one with the higher card value wins the wager of that round. Simple to play, tough to master.",
  },
  {
    id: 9,
    title: "Aura Stadium",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Aura-stadium.png",
    description:
      "One of our key attractions is the Aura – Stadium. This is an exciting gaming experience, where you have the feel of playing at a live table while comfortably placing bets at your fingertips. You can just sit there and enjoy your drink as you bet on the gaming screen while our dealers deal live for you.",
  },
  {
    id: 10,
    title: "Mini Flush",
    image: "https://bigdaddy.in/wp-content/uploads/2023/05/Mini-Flush.png",
    description:
      "Like traditional Flush, a 52 cards standard deck is used in mini-flush, the ranking of the tricks remain the same - the highest is three Aces and lowest is 5, 3, 2.",
  },
];

const Games = () => {
  const [activeGameId, setActiveGameId] = useState(gamesData[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleAccordionToggle = (id) => {
    setActiveGameId(activeGameId === id ? null : id);
  };

  const activeGame = gamesData.find((game) => game.id === activeGameId) || gamesData[0];

  return (
    <section className="py-8 min-w-full bg-black" id="gamesSec">
      <div className="container mx-auto px-5">
        <h4 className="text-3xl md:text-5xl font-semibold mb-16 md:mb-24 gradient-text">
          Games
        </h4>
        <div className="flex flex-col md:flex-row md:gap-32">
          {/* Accordion Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {gamesData.slice(0, 6).map((game) => (
                <div
                  key={game.id}
                  className="overflow-hidden cursor-pointer transition text-gray-500 duration-500"
                  onClick={() => handleAccordionToggle(game.id)}
                >
                  <div className="flex items-center p-4 border-b-[1px] border-gray-500/50">
                    <h3 className="text-lg md:text-2xl flex-1 font-bold text-left hover:text-white/60 transition duration-300">
                      {game.title}
                    </h3>
                    <div
                      className={`transition duration-300 ${
                        activeGameId === game.id ? "rotate-90" : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        className="border rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`p-4 ${activeGameId === game.id ? "block" : "hidden"}`}
                  >
                    {isMobile && (
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                      />
                    )}
                    <p className="text-md text-left">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display Image of the Active Game (Desktop only) */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <img
              src={activeGame.image}
              alt={`game-${activeGame.id}`}
              className="w-full h-full object-cover"
              style={{ maxHeight: "calc(100vh - 3rem)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;