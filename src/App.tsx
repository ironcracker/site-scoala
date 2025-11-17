import { useState } from 'react';
import TopMenu from './components/TopMenu';
import Galerie from './components/Galerie';
import { Empty } from 'antd';
import Home from './components/Home';
import Map from './components/Map';

const RenderPage = ({ current }: { current: string }) => {
    switch (current) {
        case 'home':
            return <Home />;
        case 'gallery':
            return <Galerie />;
        case 'map':
            return <Map />;
        default:
            return <Empty />;
    }
};

function App() {
    const [current, setCurrent] = useState('home');

    return (
        <div style={{ 
            minHeight: '100vh', 
            width: '100vw',
            overflow: 'auto'
        }}>
            <TopMenu setCurrent={setCurrent} />
            <RenderPage current={current} />
            <footer 
                style={{ 
                    marginTop: '20px', 
                    textAlign: 'center', 
                    color: '#e7e7e7ff', 
                    fontSize: '0.9rem' 
                }}
            >
                Website realizat de Marius L. &copy; 2025
            </footer>
        </div>
    );
}

export default App;
