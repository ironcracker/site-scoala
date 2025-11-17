import { Flex, Card, Typography } from "antd";
import '../helpers/styles.css';

const { Title, Text } = Typography;

const StudentCard = ({ name, qualities }: { name: string; qualities: string[] }) => (
    <Card
        style={{
            minWidth: '280px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        hoverable
        bordered={false}
    >
        <Flex vertical gap="middle">
            <Title level={3} style={{ margin: 0, color: '#001d66', textAlign: 'center' }}>
                {name}
            </Title>
            <Flex vertical gap="small">
                {qualities.map((quality, index) => (
                    <Text key={index} className="nameMap" style={{ fontSize: '1rem', color: '#595959' }}>
                        {quality}
                    </Text>
                ))}
            </Flex>
        </Flex>
    </Card>
);

const Map = () => {
    const students = [
        {
            name: "Marius L.",
            qualities: ["Modestie", "Ambitie", "Respect", "Inteligenta", "Umor", "Sinceritate"]
        },
        {
            name: "Andrei K.",
            qualities: ["Altruism", "Noblete", "Determinare", "Respect", "Entuziasm", "Inteligenta"]
        },
        {
            name: "Andreea C.",
            qualities: ["Acceptare", "Nadejde", "Daruire", "Rabdare", "Empatie", "Echilibru", "Ambitie"]
        },
    ];

    return (
        <Flex vertical align="center" style={{ padding: '40px 20px', minHeight: 'calc(100vh - 64px)' }}>
            <Title 
                level={1} 
                style={{ 
                    color: 'white', 
                    textAlign: 'center',
                    marginBottom: '40px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
                Codul Numelor Clasei
            </Title>
            <Flex 
                gap="large" 
                wrap 
                justify="center"
                style={{ maxWidth: '1200px', width: '100%' }}
            >
                {students.map((student, index) => (
                    <StudentCard key={index} name={student.name} qualities={student.qualities} />
                ))}
            </Flex>
        </Flex>
    );
};

export default Map;