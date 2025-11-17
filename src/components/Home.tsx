import { Flex, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Home = () => {
    return (
        <Flex 
            align="center" 
            justify="center" 
            style={{ 
                minHeight: 'calc(100vh - 64px)', 
                padding: '40px 20px' 
            }}
        >
            <Card
                style={{
                    maxWidth: '900px',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
                bordered={false}
            >
                <Flex vertical align="center" gap="large">
                    <Title 
                        level={1} 
                        style={{ 
                            margin: 0, 
                            textAlign: 'center',
                            color: '#001d66',
                            fontSize: '3rem'
                        }}
                    >
                        Clasa a VI-a B
                    </Title>
                    <Paragraph 
                        style={{ 
                            fontSize: '1.25rem', 
                            textAlign: 'center',
                            color: '#434343',
                            lineHeight: '1.8',
                            margin: 0
                        }}
                    >
                        Bine ai venit pe site-ul oficial al clasei a VI-a B de la<br />
                        <strong>Liceul Teoretic de Excelență "Dragomir Hurmuzescu"</strong><br />
                        Deva
                    </Paragraph>
                </Flex>
            </Card>
            </Flex>
    );
};

export default Home;