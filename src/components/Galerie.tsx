import { Flex } from 'antd'
import {CardFoto} from './CardFoto'
import placeholder from '../assets/test.jpg'

const Galerie = () => {
    return (
        <Flex align="center" justify='center' style={{gap: '40px', padding: '60px'}} wrap>
          <CardFoto name='Ianuarie' description="Atitudinea este o alegere. Alege mereu una care te ridica, nu care te trage in jos." imagePath={placeholder} /> 
          <CardFoto name='Februarie' description="Nu poti controla tot ce ti se intampla, dar poti controla modul in care reactionezi." imagePath={placeholder} /> 
          <CardFoto name='Martie' description="Zambeste in fata provocarilor - ele sint pasii spre crestere" imagePath={placeholder} /> 
          <CardFoto name='Aprilie' description="O atitudine pozitiva poate transforma o zi obisnuita intr-una extraordinara" imagePath={placeholder} /> 
          <CardFoto name='Mai' description="Gandurile tale devin realitatea ta. Alege sa gandesti frumos" imagePath={placeholder} /> 
          <CardFoto name='Iunie' description="Fii soarele din propria ta zi, chiar daca afara ploua." imagePath={placeholder} /> 
          <CardFoto name='Iulie' description="O minte optimista vede o oportunitate in fiecare dificultate" imagePath={placeholder} /> 
          <CardFoto name='August' description="Fii recunoscator pentru micile lucruri - ele aduc marile bucurii" imagePath={placeholder} /> 
          <CardFoto name='Septembrie' description="Atitudinea este diferenta dintre o zi buna si una pierduta" imagePath={placeholder} /> 
          <CardFoto name='Octombrie' description="Nu astepta ca lucrurile sa fie perfecte pentru a fi fericit. Fericirea ta le face perfecte" imagePath={placeholder} /> 
          <CardFoto name='Noiembrie' description="Ceea ce conteaza nu este ceea ce se intampla cu tine ci felul in care alegi sa alegi ce se intampla" imagePath={placeholder} /> 
          <CardFoto name='Decembrie' description="Fii tu inspiratia pe care o cauti. Totul incepe cu atitudinea ta." imagePath={placeholder} /> 
        </Flex>
    )}
export default Galerie;
