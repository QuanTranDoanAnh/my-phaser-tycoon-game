import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { MainScene } from '../game/MainScene';

export const PhaserGame: React.FC = () => {
    const gameContainerRef = useRef<HTMLDivElement>(null);
    // Store the game instance in a ref
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        if (gameContainerRef.current && !gameRef.current) {
            const config: Phaser.Types.Core.GameConfig = {
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                parent: gameContainerRef.current,
                scene: [MainScene],
            };

            // Create the Phaser game instance
            gameRef.current = new Phaser.Game(config);
        }

        // Cleanup function to destroy the game instance when the component unmounts
        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div ref={gameContainerRef} />;
};