import { Flex } from 'antd'
import {CardFoto} from './CardFoto'
import placeholder from '../assets/placeholder.png'

const Galerie = () => {
    return (
    <>
        <Flex align="space-around" style={{gap: '20px', padding: '20px'}} >
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 2' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 3' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
        </Flex>
        <Flex align="space-around" style={{gap: '20px', padding: '20px'}} >
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 2' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 3' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
        </Flex>
        <Flex align="space-around" style={{gap: '20px', padding: '20px'}} >
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 2' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card 3' description="descriere" imagePath={placeholder} /> 
          <CardFoto name='Titlu Card' description="descriere" imagePath={placeholder} /> 
        </Flex>
    </>
    )}
export default Galerie;
