import { observer } from 'mobx-react';
import { d20Store } from '../stores/D20Store';

const COLOR_VALUES: Record<string, string> = {
    white: '#ffffff',
    red: '#ff4444',
    orange: '#ff8844',
    yellow: '#ffdd44',
    blue: '#4488ff',
    green: '#44ff44',
    purple: '#8844ff',
};

interface DieProps {
    value: number;
    isWinner: boolean;
    index: number;
}

export const Die = observer(({ value, isWinner }: DieProps) => {
    const store = d20Store;
    const color = COLOR_VALUES[store.diceColor];

    return (
        <div className={`die ${isWinner ? 'winner' : ''}`}>
            <div
                className="die-triangle"
                style={{
                    borderBottomColor: color,
                }}
            >
                <div className="die-number" style={{ top: '120px' }}>
                    {value}
                </div>
            </div>
        </div>
    );
});
