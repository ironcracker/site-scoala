import { Flex } from 'antd'
import {CardFoto} from './CardFoto'
import placeholder from '../assets/test.jpg'
import placeholder2 from '../assets/placeholder.png'
import * as texte from '../helpers/text'

const Galerie = () => {
    return (
        <Flex align="center" justify='center' style={{gap: '20px', padding: '20px'}} wrap>
          <CardFoto name={texte.Ianuarie} description={texte.textIanuarie} imagePath={placeholder} /> 
          <CardFoto name={texte.Februarie} description={texte.textFebruarie} imagePath={placeholder2} /> 
          <CardFoto name={texte.Martie} description={texte.textMartie} imagePath={placeholder} /> 
          <CardFoto name={texte.Aprilie} description={texte.textAprilie} imagePath={placeholder2} /> 
          <CardFoto name={texte.Mai} description={texte.textMai} imagePath={placeholder} /> 
          <CardFoto name={texte.Iunie} description={texte.textIunie} imagePath={placeholder} /> 
          <CardFoto name={texte.Iulie} description={texte.textIulie} imagePath={placeholder2} /> 
          <CardFoto name={texte.August} description={texte.textAugust} imagePath={placeholder} /> 
          <CardFoto name={texte.Septembrie} description={texte.textSeptembrie} imagePath={placeholder} /> 
          <CardFoto name={texte.Octombrie} description={texte.textOctombrie} imagePath={placeholder} /> 
          <CardFoto name={texte.Noiembrie} description={texte.textNoiembrie} imagePath={placeholder2} /> 
          <CardFoto name={texte.Decembrie} description={texte.textDecembrie} imagePath={placeholder} /> 
        </Flex>
    )}
export default Galerie;
