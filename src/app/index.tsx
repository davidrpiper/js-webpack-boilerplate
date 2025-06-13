import { observer } from 'mobx-react';
import { LeftPanel } from '../components/LeftPanel';
import { RightPanel } from '../components/RightPanel';
import './styles.css';

const App = observer(() => {
    return (
        <div className="app">
            <LeftPanel />
            <RightPanel />
        </div>
    );
});

export default App;
