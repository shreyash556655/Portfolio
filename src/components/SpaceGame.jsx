import React, { useState, useEffect } from "react";

const SpaceGame = () => {
  const [shipPosition, setShipPosition] = useState(50); // Ship position (percentage of width)
  const [bullets, setBullets] = useState([]); // Bullets array
  const [stars, setStars] = useState([]); // Stars array
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Move the ship with arrow keys
  const moveShip = (e) => {
    if (e.key === "ArrowLeft" && shipPosition > 0) {
      setShipPosition((prev) => prev - 5);
    } else if (e.key === "ArrowRight" && shipPosition < 95) {
      setShipPosition((prev) => prev + 5);
    }
  };

  // Shoot bullets
  const shootBullet = () => {
    setBullets((prev) => [...prev, { x: shipPosition + 2.5, y: 85 }]);
  };

  // Touch/move support for mobile
  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const screenWidth = window.innerWidth;
    const newPosition = (touchX / screenWidth) * 100;
    setShipPosition(newPosition > 95 ? 95 : newPosition < 0 ? 0 : newPosition);
  };

  useEffect(() => {
    // Add keyboard controls
    window.addEventListener("keydown", moveShip);
    window.addEventListener("keydown", (e) => e.key === " " && shootBullet);

    return () => {
      window.removeEventListener("keydown", moveShip);
      window.removeEventListener("keydown", (e) => e.key === " " && shootBullet);
    };
  }, [shipPosition]);

  // Game logic: Move bullets, spawn stars, and detect collisions
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      // Move bullets upward
      setBullets((prev) =>
        prev
          .map((bullet) => ({ ...bullet, y: bullet.y - 5 }))
          .filter((bullet) => bullet.y > 0)
      );

      // Move stars downward
      setStars((prev) =>
        prev
          .map((star) => ({ ...star, y: star.y + 3 }))
          .filter((star) => star.y < 100)
      );

      // Check for collisions
      bullets.forEach((bullet, bulletIndex) => {
        stars.forEach((star, starIndex) => {
          const isHit =
            Math.abs(bullet.x - star.x) < 3 && Math.abs(bullet.y - star.y) < 5;

          if (isHit) {
            // Remove star and bullet
            setStars((prev) => prev.filter((_, i) => i !== starIndex));
            setBullets((prev) => prev.filter((_, i) => i !== bulletIndex));
            setScore((prev) => prev + 1);
          }
        });
      });

      // Spawn stars
      if (Math.random() > 0.9) {
        setStars((prev) => [...prev, { x: Math.random() * 90, y: 0 }]);
      }

      // Check for game over (if a star reaches the bottom)
      stars.forEach((star) => {
        if (star.y >= 95) {
          setGameOver(true);
          clearInterval(interval);
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [bullets, stars, gameOver]);

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setBullets([]);
    setStars([]);
    setShipPosition(50);
  };

  return (
    <div
      className="relative w-full h-96 bg-gradient-to-b from-gray-900 via-gray-800 to-black border-4 border-cyan-400 rounded-lg overflow-hidden"
      onTouchMove={handleTouchMove}
    >
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-10">
          <h1 className="text-2xl font-bold text-white">Game Over</h1>
          <p className="text-lg text-gray-300">Score: {score}</p>
          <button
            onClick={restartGame}
            className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
          >
            Restart
          </button>
        </div>
      )}
      <div className="absolute top-4 left-4 text-white text-lg font-semibold">
        Score: {score}
      </div>
      <div
        className="absolute w-12 h-12 bg-cyan-500 rounded-full transition-all"
        style={{
          left: `${shipPosition}%`,
          top: "85%",
        }}
      ></div>
      {bullets.map((bullet, index) => (
        <div
          key={index}
          className="absolute w-2 h-6 bg-yellow-400 rounded-full"
          style={{
            left: `${bullet.x}%`,
            top: `${bullet.y}%`,
          }}
        ></div>
      ))}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-8 h-8 bg-pink-500 rounded-full shadow-md"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SpaceGame;
