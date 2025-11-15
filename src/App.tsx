
import { useState } from 'react';
import TopMenu from './components/TopMenu';
import Galerie from './components/Galerie';
import { Empty } from 'antd';
import Home from './components/Home';
import Map from './components/Map';


function App() {
  const [current, setCurrent] = useState('home');

  const RenderPage = ({current}:{current:string}) =>
  {
    switch(current)
    {
      case 'home':
        return <Home/>;
      case 'gallery':
        return <Galerie/>;
      case 'map':
        return <Map/>;
      default:
        return <Empty/>;
    }
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw'}}>
    <TopMenu setCurrent={setCurrent}/>
    <RenderPage current={current}/>
    </div>
    </>
  )
}

export default App
