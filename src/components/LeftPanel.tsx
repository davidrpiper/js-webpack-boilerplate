import { observer } from 'mobx-react';
import { d20Store, DiceColor } from '../stores/D20Store';

const COLORS: DiceColor[] = [
    'white',
    'red',
    'orange',
    'yellow',
    'blue',
    'green',
    'purple',
];

const COLOR_VALUES: Record<DiceColor, string> = {
    white: '#ffffff',
    red: '#ff4444',
    orange: '#ff8844',
    yellow: '#ffdd44',
    blue: '#4488ff',
    green: '#44ff44',
    purple: '#8844ff',
};

export const LeftPanel = observer(() => {
    const store = d20Store;

    return (
        <div className="left-panel">
            <h1>D20 Simulator!</h1>

            <div className="config-section">
                <label>
                    {store.rollMode === 'straight'
                        ? 'Die Color'
                        : 'Die 1 Color'}
                </label>
                <div className="color-picker">
                    {COLORS.map((color) => (
                        <div
                            key={color}
                            className={`color-option ${store.die1Color === color ? 'selected' : ''}`}
                            style={{ backgroundColor: COLOR_VALUES[color] }}
                            onClick={() => store.setDie1Color(color)}
                        />
                    ))}
                </div>
            </div>

            {store.rollMode !== 'straight' && (
                <div className="config-section">
                    <label>Die 2 Color</label>
                    <div className="color-picker">
                        {COLORS.map((color) => (
                            <div
                                key={color}
                                className={`color-option ${store.die2Color === color ? 'selected' : ''}`}
                                style={{ backgroundColor: COLOR_VALUES[color] }}
                                onClick={() => store.setDie2Color(color)}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="config-section">
                <label>Roll Mode</label>
                <div className="radio-group">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="rollMode"
                            value="straight"
                            checked={store.rollMode === 'straight'}
                            onChange={() => store.setRollMode('straight')}
                            disabled={store.isRolling}
                        />
                        Straight
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="rollMode"
                            value="advantage"
                            checked={store.rollMode === 'advantage'}
                            onChange={() => store.setRollMode('advantage')}
                            disabled={store.isRolling}
                        />
                        Advantage
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="rollMode"
                            value="disadvantage"
                            checked={store.rollMode === 'disadvantage'}
                            onChange={() => store.setRollMode('disadvantage')}
                            disabled={store.isRolling}
                        />
                        Disadvantage
                    </label>
                </div>
            </div>

            <div className="config-section">
                <label className="checkbox-label">
                    Sounds
                    <input
                        type="checkbox"
                        checked={store.soundEnabled}
                        onChange={(e) =>
                            store.setSoundEnabled(e.target.checked)
                        }
                        disabled={store.isRolling}
                    />
                </label>
            </div>

            <button
                className="roll-button"
                onClick={() => store.roll()}
                disabled={store.isRolling}
            >
                Roll!
            </button>
        </div>
    );
});
