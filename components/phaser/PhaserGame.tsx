'use client';
import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser'; // ✅ correct


interface GameWrapperProps {
  createGame: (PhaserGameRef: Phaser.Game) => void;
}

export default function PhaserGame({ createGame }: GameWrapperProps) {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: Phaser.Game;

    if (gameRef.current) {
      game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: gameRef.current,
        scene: [],
        backgroundColor: '#ffffff',
      });

      createGame(game);
    }

    return () => {
      game?.destroy(true);
    };
  }, []);

  return <div ref={gameRef} className="w-full h-full" />;
}
