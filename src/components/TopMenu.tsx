import { Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const TopMenu = ({setCurrent}:{setCurrent:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <Header>
    <Flex justify="flex-start" align='left' gap='small'>
    <Menu theme="dark" onClick={(e) => setCurrent(e.key)} mode="horizontal" items={[
      {
          label: 'Home',
          key: 'home',
        },
        {
            label: 'Calendar Motivational',
            key: 'gallery',
        },
        {
            label: 'Harta Nume',
            key: 'map',
        },
    ]} />
    </Flex>
    </Header>
)
};
  export default TopMenu;