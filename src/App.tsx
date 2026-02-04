import { useState } from 'react';
import TopMenu from './components/TopMenu';
import Calendar from './components/Calendar';
import { Empty } from 'antd';
import Home from './components/Home';
import Map from './components/Map';

const RenderPage = ({ current }: { current: string }) => {
    switch (current) {
        case 'home':
            return <Home />;
        case 'calendar':
            return <Calendar />;
        case 'map':
            return <Map />;
        case 'gallery':
            return <Empty description="Galerie în curs de dezvoltare" />;
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
                    backgroundColor: '#001529', 
                    textAlign: 'center',
                    padding: '10px 20px',
                    fontSize: '0.9rem',
                }}
            >
                Website realizat de Marius L. &copy; 2025
            </footer>
        </div>
    );
}

export default App;
