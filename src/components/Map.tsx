import { Flex } from "antd";
import '../helpers/styles.css';
const Map = () =>{
    return (
        <>
         <Flex align="center" justify='center'>
         <h1 style={{ margin:'20px', padding:'40px'}}>Codul numelor a clasei</h1>
         </Flex>
         <div style={{ backgroundColor: 'rgba(0,0,0,.5)', padding: '20px' }}>
            <Flex vertical={false} gap={"large"} wrap>
            <Flex vertical>
                <p style={{fontSize:'35px'}}> Marius L.</p>
                <p className='nameMap'>Modestie</p>
                <p className='nameMap'>Ambitie</p>
                <p className='nameMap'>Respect</p>
                <p className='nameMap'>Inteligenta</p>
                <p className='nameMap'>Umor</p>
                <p className='nameMap'>Sinceritate</p>
            </Flex>
            <Flex vertical>
                <p style={{fontSize:'35px'}}> Andrei K.</p>
                <p className='nameMap'>Altruism</p>
                <p className='nameMap'>Noblete</p>
                <p className='nameMap'>Determinare</p>
                <p className='nameMap'>Respect</p>
                <p className='nameMap'>Entuziasm</p>
                <p className='nameMap'>Inteligenta</p>
            </Flex>
            <Flex vertical>
                <p style={{fontSize:'35px'}}> Andreea C.</p>
                <p className='nameMap'>Acceptare</p>
                <p className='nameMap'>Nadejde</p>
                <p className='nameMap'>Daruire</p>
                <p className='nameMap'>Rabdare</p>
                <p className='nameMap'>Empatie</p>
                <p className='nameMap'>Echilibru</p>
                <p className='nameMap'>Ambitie</p>
            </Flex>
            </Flex>
         </div>
        </>
) }
export default Map;