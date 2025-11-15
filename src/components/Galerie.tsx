import { Flex } from 'antd'
import {CardFoto} from './CardFoto'
import placeholder from '../assets/test.jpg'
import placeholder2 from '../assets/placeholder.png'
import { Ianuarie, Februarie, Martie, Aprilie, Mai, Iunie, Iulie,August, Septembrie, Octombrie, Noiembrie, Decembrie, textIanuarie, textAprilie, textAugust, textDecembrie, textFebruarie, textIulie, textIunie, textMai, textMartie, textNoiembrie, textOctombrie, textSeptembrie } from '../helpers/text'

const Galerie = () => {
    return (
        <Flex align="center" justify='center' style={{gap: '20px', padding: '20px'}} wrap>
          <CardFoto name={Ianuarie} description={textIanuarie} imagePath={placeholder} /> 
          <CardFoto name={Februarie} description={textFebruarie} imagePath={placeholder2} /> 
          <CardFoto name={Martie} description={textMartie} imagePath={placeholder} /> 
          <CardFoto name={Aprilie} description={textAprilie} imagePath={placeholder2} /> 
          <CardFoto name={Mai} description={textMai} imagePath={placeholder} /> 
          <CardFoto name={Iunie} description={textIunie} imagePath={placeholder} /> 
          <CardFoto name={Iulie} description={textIulie} imagePath={placeholder2} /> 
          <CardFoto name={August} description={textAugust} imagePath={placeholder} /> 
          <CardFoto name={Septembrie} description={textSeptembrie} imagePath={placeholder} /> 
          <CardFoto name={Octombrie} description={textOctombrie} imagePath={placeholder} /> 
          <CardFoto name={Noiembrie} description={textNoiembrie} imagePath={placeholder2} /> 
          <CardFoto name={Decembrie} description={textDecembrie} imagePath={placeholder} /> 
        </Flex>
    )}
export default Galerie;
