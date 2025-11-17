import { Flex, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { HomeOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons';

const TopMenu = ({ setCurrent }: { setCurrent: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <Header style={{ 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            padding: '0 24px'
        }}>
            <Flex justify="flex-start" align="center">
                <Menu 
                    theme="dark" 
                    onClick={(e) => setCurrent(e.key)} 
                    mode="horizontal" 
                    defaultSelectedKeys={['home']}
                    style={{ flex: 1, minWidth: 0 }}
                    items={[
                        {
                            label: 'Acasă',
                            key: 'home',
                            icon: <HomeOutlined />,
                        },
                        {
                            label: 'Calendar Motivațional',
                            key: 'gallery',
                            icon: <CalendarOutlined />,
                        },
                        {
                            label: 'Harta Numelor',
                            key: 'map',
                            icon: <TeamOutlined />,
                        },
                    ]} 
                />
            </Flex>
        </Header>
    );
};

export default TopMenu;