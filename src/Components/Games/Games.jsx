// import React, { useState, useEffect } from "react";

// const gamesData = [
//   {
//     id: 1,
//     title: "Baccarat",
//     image: "./Baccarat.webp",
//     description:
//       "Baccarat is a comparing card game played between two hands, the Player and the Banker. Each Baccarat coup has three possible outcomes: 'player', 'banker', and 'tie'.",
//   },
//   {
//     id: 2,
//     title: "Roulette",
//     image: "./Roulette.JPG",
//     description:
//       "Roulette is a popular casino game that originated in France in the 18th century. The game is played on a wheel that is divided into numbered pockets, ranging from 0 to 36. The objective of the game is to predict where the ball will land on the spinning wheel.",
//   },
//   {
//     id: 3,
//     title: "Andar Bahar",
//     image: "./Andar-Bahar.webp",
//     description:
//       "Andar Bahar, also known as Katti, is a popular card game from India that is often played in casinos and online gaming platforms. The game is played with a single deck of cards and can be played by any number of players.",
//   },
//   {
//     id: 4,
//     title: "5 Card Poker",
//     image: "./5-Card-Poker.png",
//     description:
//       "Five Card Poker, also known as Five Card Draw, is a classic poker game that is played with a standard deck of 52 cards. The game can be played by 2 to 6 players, and the objective is to have the best five-card hand at the end of the game.",
//   },
//   {
//     id: 5,
//     title: "Blackjack",
//     image: "./Blackjack.jpg",
//     description:
//       "Blackjack is a popular card game where players aim to have a hand value closer to 21 than the dealer's hand without going over. Numbered cards are worth their face value, face cards are worth 10, and Aces can be worth 1 or 11. Getting a total of 21 with an Ace and a 10-value card results in a Blackjack, an automatic win.",
//   },
//   {
//     id: 6,
//     title: "Texas Holdem",
//     image: "./Texas-Holdem.webp",
//     description:
//       "A variation of classic poker, each player seeks the best five card poker hand from a total of 7 available cards on the table.",
//   },
// ];

// const Games = () => {
//   const [activeGameId, setActiveGameId] = useState(gamesData[0].id);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);

//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   const handleAccordionToggle = (id) => {
//     setActiveGameId(activeGameId === id ? null : id);
//   };

//   const activeGame = gamesData.find((game) => game.id === activeGameId) || gamesData[0];

//   return (
//     <section className="py-8 min-w-full bg-black" id="gamesSec">
//       <div className="container mx-auto px-5">
//         <h4 className="text-3xl md:text-5xl font-semibold mb-16 md:mb-24 gradient-text">
//           Games
//         </h4>
//         <div className="flex flex-col md:flex-row md:gap-32">
//           {/* Accordion Section */}
//           <div className="w-full md:w-1/2">
//             <div className="space-y-4">
//               {gamesData.slice(0, 6).map((game) => (
//                 <div
//                   key={game.id}
//                   className="overflow-hidden cursor-pointer transition text-gray-500 duration-500"
//                   onClick={() => handleAccordionToggle(game.id)}
//                 >
//                   <div className="flex items-center p-4 border-b-[1px] border-gray-500/50">
//                     <h3 className="text-lg md:text-2xl flex-1 font-bold text-left hover:text-white/60 transition duration-300">
//                       {game.title}
//                     </h3>
//                     <div
//                       className={`transition duration-300 ${
//                         activeGameId === game.id ? "rotate-90" : ""
//                       }`}
//                     >
//                       <svg
//                         width="18"
//                         height="18"
//                         fill="none"
//                         stroke="white"
//                         viewBox="0 0 24 24"
//                         className="border rounded-full"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div
//                     className={`p-4 ${activeGameId === game.id ? "block" : "hidden"}`}
//                   >
//                     {isMobile && (
//                       <img
//                         src={game.image}
//                         alt={game.title}
//                         className="w-full h-48 object-cover mb-4 rounded-lg"
//                       />
//                     )}
//                     <p className="text-md text-left">{game.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Display Image of the Active Game (Desktop only) */}
//           <div className="w-full md:w-1/2 relative hidden md:block">
//             <img
//               src={activeGame.image}
//               alt={`game-${activeGame.id}`}
//               className="w-full h-full object-cover"
//               style={{ maxHeight: "calc(100vh - 3rem)" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Games;
import React, { useState, useEffect } from "react";

const gamesData = [
  {
    id: 1,
    title: "Andar Bahar",
    description: "A simple and fast-paced Indian card game where players bet on which side (Andar or Bahar) a matching card will appear. The dealer draws cards alternately to each side until a match is found."
  },
  {
    id: 2,
    title: "Baccarat",
    description: "A popular card game where players bet on whether the Player's hand or the Banker's hand will be closer to a total of 9, or if the round will end in a tie. It's a game of chance with simple rules but offers high stakes."
  },
  {
    id: 3,
    title: "Blackjack",
    description: "Also known as 21, the goal is to have a hand value closer to 21 than the dealer without going over. Players are dealt two cards and can choose to 'hit' for more cards or 'stand' to keep their current hand."
  },
  {
    id: 4,
    title: "Roulette",
    description: "A classic casino game where players place bets on where a ball will land on a spinning wheel. The wheel has numbered and colored slots (red, black, and green), and players can bet on specific numbers, colors, or ranges of numbers."
  },
  {
    id: 5,
    title: "Dragon Tiger",
    description: "A simple two-card game where players bet on which side (Dragon or Tiger) will have the higher card. It's a fast game, often compared to Baccarat, with only two possible outcomes and a tie option."
  },
  {
    id: 6,
    title: "3 Card Poker",
    description: "A poker variant where players are dealt three cards and aim to have a higher-ranking hand than the dealer. There are two betting options: Ante/Play or Pair Plus, with various hand rankings, including straight flushes and three-of-a-kind."
  },
  {
    id: 7,
    title: "Slot Machine",
    description: "A game of chance where players spin reels featuring various symbols. Wins are based on matching symbols on paylines, and modern slots often feature bonus rounds, wilds, and progressive jackpots."
  },
  {
    id: 8,
    title: "Spintec",
    description: "An automated electronic gaming system offering live, virtual, and multi-game setups for casino table games like Roulette and Baccarat, known for providing a smooth, immersive gaming experience."
  },
  {
    id: 9,
    title: "Casino War",
    description: "A simple card game where players bet on having a higher card than the dealer. If the player's card is higher, they win. In case of a tie, players can choose to go to 'war' for an additional bet."
  },
  {
    id: 10,
    title: "Sic Bo",
    description: "A dice-based game originating in China. Players bet on various possible outcomes of the roll of three dice, with options to wager on combinations, totals, or specific dice values. It's a game of chance with multiple betting strategies."
  }
];

const GameSection = ({ games, image, imageOnLeft }) => {
  const [activeGameId, setActiveGameId] = useState(null);

  const handleAccordionToggle = (id) => {
    setActiveGameId(activeGameId === id ? null : id);
  };

  return (
    <div className="flex flex-col mb-16">
      <div className={`w-full md:w-1/2 md:${imageOnLeft ? 'order-first' : 'order-last'} mb-8 md:mb-0`}>
        <img
          src={image}
          alt="Casino game"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="space-y-4">
          {games.map((game) => (
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
                <p className="text-md text-left">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Games = () => {
  const halfLength = Math.ceil(gamesData.length / 2);
  const firstHalf = gamesData.slice(0, halfLength);
  const secondHalf = gamesData.slice(halfLength);

  return (
    <section className="py-8 min-w-full bg-black" id="gamesSec">
      <div className="container mx-auto px-5">
        <h4 className="text-3xl md:text-5xl font-semibold mb-16 md:mb-24 gradient-text">
          Games
        </h4>
        <GameSection 
          games={firstHalf} 
          image="./Baccarat.webp"
          imageOnLeft={true} 
        />
        <GameSection 
          games={secondHalf} 
          image="./Roulette.JPG"
          imageOnLeft={false} 
        />
      </div>
    </section>
  );
};

export default Games;