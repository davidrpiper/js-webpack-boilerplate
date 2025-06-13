import { makeAutoObservable } from 'mobx';

export type DiceColor =
    | 'white'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'blue'
    | 'green'
    | 'purple';
export type RollMode = 'straight' | 'advantage' | 'disadvantage';

class D20Store {
    diceColor: DiceColor = 'white';
    rollMode: RollMode = 'straight';
    soundEnabled: boolean = false;
    isRolling: boolean = false;
    diceValues: number[] = [20, 10]; // Default values: [20] for straight, [10, 10] for adv/disadv
    finalValues: number[] = [20, 10];
    winnerIndex: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setDiceColor(color: DiceColor) {
        this.diceColor = color;
    }

    setRollMode(mode: RollMode) {
        this.rollMode = mode;
        this.winnerIndex = null;
        // Reset dice values based on mode
        if (mode === 'straight') {
            this.diceValues = [20];
            this.finalValues = [20];
        } else {
            this.diceValues = [10, 10];
            this.finalValues = [10, 10];
        }
    }

    setSoundEnabled(enabled: boolean) {
        this.soundEnabled = enabled;
    }

    get numberOfDice(): number {
        return this.rollMode === 'straight' ? 1 : 2;
    }

    get currentValues(): number[] {
        return this.diceValues.slice(0, this.numberOfDice);
    }

    roll() {
        if (this.isRolling) return;

        this.isRolling = true;
        this.winnerIndex = null;

        // Generate final values
        this.finalValues = Array(this.numberOfDice)
            .fill(0)
            .map(() => Math.floor(Math.random() * 20) + 1);

        // Trigger sound if enabled
        if (this.soundEnabled) {
            this.playSound('roll');
        }

        // Start animation
        const startTime = Date.now();
        const animationDuration = 5000; // 5 seconds
        const updateInterval = 100; // 10 times per second

        const intervalId = window.setInterval(() => {
            const elapsed = Date.now() - startTime;

            if (elapsed >= animationDuration) {
                // Animation complete
                window.clearInterval(intervalId);
                this.diceValues = [...this.finalValues];
                this.isRolling = false;

                // Determine winner for advantage/disadvantage
                if (this.rollMode !== 'straight') {
                    if (this.rollMode === 'advantage') {
                        this.winnerIndex =
                            this.finalValues[0] >= this.finalValues[1] ? 0 : 1;
                    } else {
                        this.winnerIndex =
                            this.finalValues[0] <= this.finalValues[1] ? 0 : 1;
                    }
                }

                if (this.soundEnabled) {
                    this.playSound('complete');
                }
            } else {
                // Update with random values during animation
                this.diceValues = Array(this.numberOfDice)
                    .fill(0)
                    .map(() => Math.floor(Math.random() * 20) + 1);
            }
        }, updateInterval);
    }

    playSound(type: 'roll' | 'complete') {
        // Stub function for sound implementation
        console.log(`[Sound] Would play ${type} sound`);
        // TODO: Implement actual sound playback
    }
}

export const d20Store = new D20Store();
