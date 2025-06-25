'use client';
import PhaserGame from '@/components/phaser/PhaserGame';
import * as Phaser from 'phaser';

export default function MemoryMatchGame() {
  const createGame = (game: Phaser.Game) => {
    class MemoryScene extends Phaser.Scene {
      constructor() {
        super('MemoryScene');
      }

      preload() {
        // Load card back + assets (replace with your own YV icons!)
        this.load.image('card-back', 'back.png');
        this.load.image('icon1', '/logo1.png');
        this.load.image('icon2', '/logo2.png');
        // ... load all 8 icons twice
      }

      create() {
        const icons = ['icon1', 'icon2', 'icon1', 'icon2']; // Add full list & shuffle
        Phaser.Utils.Array.Shuffle(icons);

        // Grid layout
        icons.forEach((icon, i) => {
          const x = 150 + (i % 4) * 150;
          const y = 150 + Math.floor(i / 4) * 150;
          const card = this.add.image(x, y, 'card-back').setInteractive();
          card.setData('icon', icon);
          card.setData('flipped', false);

          card.on('pointerdown', () => {
            if (!card.getData('flipped')) {
              card.setTexture(icon);
              card.setData('flipped', true);
              // Check for match logic here
            }
          });
        });
      }
    }

    game.scene.add('MemoryScene', MemoryScene, true);
  };

  return <PhaserGame createGame={createGame} />;
}
