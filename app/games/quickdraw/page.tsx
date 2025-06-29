'use client';

import { useEffect, useRef, useState } from 'react';

export default function EmotionsGame() {
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);
  const finalScoreRef = useRef<HTMLSpanElement>(null);

  const [gameActive, setGameActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);

  // Game state with difficulty scaling
  const gameStateRef = useRef({
    baseFallSpeed: 4,
    baseSpawnInterval: 1200,
    currentFallSpeed: 4,
    currentSpawnInterval: 1200,
    animationFrameId: 0,
    lastSpawn: 0,
    fallingItems: [] as { element: HTMLElement; y: number }[],
    // Difficulty scaling factors
    speedIncreaseFactor: 0.1, // How much speed increases per point
    spawnRateIncreaseFactor: 10, // How much faster items spawn per point
    maxFallSpeed: 10, // Maximum falling speed
    minSpawnInterval: 500 // Minimum spawn interval
  });

  const officeIcons = [
    "/games/emotions/04.webp",
    "/games/emotions/logo1.webp",
    "/games/emotions/logo2.webp",
    "/games/emotions/03.webp",
    "/games/emotions/05.webp"
  ];

  const updateBounds = () => {
    return {
      game: gameAreaRef.current?.getBoundingClientRect(),
      basket: basketRef.current?.getBoundingClientRect(),
    };
  };

  const moveBasket = (clientX: number) => {
    if (!gameActive || !gameAreaRef.current || !basketRef.current) return;

    const { game } = updateBounds();
    if (!game) return;

    const basketWidth = basketRef.current.offsetWidth;
    let newX = clientX - game.left - basketWidth / 2;
    newX = Math.max(0, Math.min(newX, game.width - basketWidth));
    basketRef.current.style.left = `${newX}px`;
  };

  const spawnItem = () => {
    if (!gameAreaRef.current) return;
    const game = gameAreaRef.current.getBoundingClientRect();

    const item = document.createElement('div');
    item.className = 'falling-item absolute w-16 h-20 bg-white shadow-lg border border-gray-300 rounded-xl p-2 flex items-center justify-center transition-transform duration-300 will-change-transform z-10';
    const left = Math.floor(Math.random() * (game.width - 64));
    item.style.left = `${left}px`;
    item.style.top = `-80px`;

    const img = document.createElement('img');
    img.src = officeIcons[Math.floor(Math.random() * officeIcons.length)];
    img.className = 'w-full h-full object-contain rounded-md';
    item.appendChild(img);

    gameAreaRef.current.appendChild(item);
    gameStateRef.current.fallingItems.push({ element: item, y: -80 });
  };

  const updateItems = () => {
    if (!gameAreaRef.current || !basketRef.current) return;

    const gameArea = gameAreaRef.current;
    const basket = basketRef.current;

    const basketRect = basket.getBoundingClientRect();
    const gameRect = gameArea.getBoundingClientRect();

    for (let i = gameStateRef.current.fallingItems.length - 1; i >= 0; i--) {
      const itemObj = gameStateRef.current.fallingItems[i];
      const item = itemObj.element;

      // Update position with current speed
      itemObj.y += gameStateRef.current.currentFallSpeed;
      item.style.transform = `translateY(${itemObj.y}px)`;

      const itemRect = item.getBoundingClientRect();

      // Check collision with basket
      if (
        itemRect.bottom >= basketRect.top &&
        itemRect.right >= basketRect.left &&
        itemRect.left <= basketRect.right
      ) {
        setScore((s) => {
          const newScore = s + 1;
          // Update speed and spawn interval based on new score
          gameStateRef.current.currentFallSpeed = Math.min(
            gameStateRef.current.baseFallSpeed + (newScore * gameStateRef.current.speedIncreaseFactor),
            gameStateRef.current.maxFallSpeed
          );
          gameStateRef.current.currentSpawnInterval = Math.max(
            gameStateRef.current.baseSpawnInterval - (newScore * gameStateRef.current.spawnRateIncreaseFactor),
            gameStateRef.current.minSpawnInterval
          );
          return newScore;
        });
        item.remove();
        gameStateRef.current.fallingItems.splice(i, 1);
        continue;
      }

      // Check if item is out of bounds
      if (itemRect.top > gameRect.bottom) {
        setMisses((m) => {
          const newMisses = m + 1;
          if (newMisses >= 3) endGame();
          return newMisses;
        });
        item.remove();
        gameStateRef.current.fallingItems.splice(i, 1);
      }
    }
  };

  const gameLoop = (time: number) => {
    if (!gameActive) return;
    updateItems();
    if (time - gameStateRef.current.lastSpawn > gameStateRef.current.currentSpawnInterval) {
      spawnItem();
      gameStateRef.current.lastSpawn = time;
    }
    gameStateRef.current.animationFrameId = requestAnimationFrame(gameLoop);
  };

  const startGame = () => {
    // Clear any existing items
    gameStateRef.current.fallingItems.forEach(item => item.element.remove());
    gameStateRef.current.fallingItems = [];
    
    setScore(0);
    setMisses(0);
    setGameActive(true);
    setShowModal(false);
    
    // Reset game state with base difficulty
    gameStateRef.current.currentFallSpeed = gameStateRef.current.baseFallSpeed;
    gameStateRef.current.currentSpawnInterval = gameStateRef.current.baseSpawnInterval;
    gameStateRef.current.lastSpawn = performance.now();

    if (basketRef.current && gameAreaRef.current) {
      const game = gameAreaRef.current.getBoundingClientRect();
      basketRef.current.style.left = `${(game.width / 2) - 40}px`;
      basketRef.current.style.visibility = 'visible';
    }

    gameStateRef.current.animationFrameId = requestAnimationFrame(gameLoop);
  };

  const endGame = () => {
    setGameActive(false);
    cancelAnimationFrame(gameStateRef.current.animationFrameId);
    if (finalScoreRef.current) finalScoreRef.current.textContent = score.toString();
    setShowModal(true);
    if (basketRef.current) basketRef.current.style.visibility = 'hidden';
  };

  useEffect(() => {
    const handleResize = () => updateBounds();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(gameStateRef.current.animationFrameId);
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-sky-300 p-6 font-inter">
      <div className="relative w-[375px] h-[650px] bg-white/90 border-[5px] border-green-500 rounded-[20px] shadow-2xl flex flex-col justify-between p-5">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-dashed pb-2 mb-2">
          <div className="text-lg font-bold flex gap-4 text-gray-700">
            <span>Score: {score}</span>
            <span>Misses: {misses}</span>
          </div>
          <button
            onClick={startGame}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-400 text-white font-bold rounded-lg shadow-md hover:from-green-400 hover:to-blue-500 transition-transform duration-300 hover:-translate-y-1"
          >
            Start Game
          </button>
        </div>

        {/* Game Area */}
        <div
          ref={gameAreaRef}
          className="relative flex-1 bg-blue-100/70 rounded-xl border-2 border-dashed border-red-500 overflow-hidden"
          onMouseMove={(e) => moveBasket(e.clientX)}
          onTouchMove={(e) => {
            e.preventDefault();
            moveBasket(e.touches[0].clientX);
          }}
        >
          <div
            ref={basketRef}
            className="absolute bottom-0 w-20 h-8 bg-gradient-to-r from-sky-500 to-blue-600 border-4 border-blue-700 rounded-t-xl shadow-md transition-all"
          />
        </div>

        {/* Game Over Modal */}
        {showModal && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-[20px] z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center text-xl font-bold text-gray-800">
              <h2 className="text-2xl mb-4">Game Over!</h2>
              <p>Your final score: <span ref={finalScoreRef}>{score}</span></p>
              <button
                onClick={startGame}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg shadow-md hover:from-sky-500 hover:to-blue-600 transition-transform hover:-translate-y-1"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}