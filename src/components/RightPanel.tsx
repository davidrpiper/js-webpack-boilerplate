import { observer } from 'mobx-react';
import { d20Store } from '../stores/D20Store';
import { Die } from './Die';

export const RightPanel = observer(() => {
    const store = d20Store;
    const values = store.currentValues;

    return (
        <div className="right-panel">
            <div className="dice-container">
                {values.map((value, index) => (
                    <Die
                        key={index}
                        value={value}
                        index={index}
                        isWinner={store.winnerIndex === index}
                    />
                ))}
            </div>
        </div>
    );
});
