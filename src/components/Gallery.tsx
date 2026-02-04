import { useState } from 'react';
import { Card, Row, Col, Modal } from 'antd';

const { Meta } = Card;

const photos = [
    {
        id: 1,
        name: 'Imagine 1',
        imagePath: '../assets/galerie (1).jpeg',
    },
    {
        id: 2,
        name: 'imagine 2',
        imagePath: '../assets/galerie (2).jpeg',
    },
    {
        id: 3,
        name: 'imagine 3',
        imagePath: '../assets/galerie (3).jpeg',
    },
    {
        id: 4,
        name: 'imagine 4',
       imagePath: '../assets/galerie (4).jpeg',
    },
    {
        id: 5,
        name: 'imagine 5',
       imagePath: '../assets/galerie (5).jpeg',
    },
    {
        id: 6,
        name: 'imagine 6',
       imagePath: '../assets/galerie (6).jpeg',
    },
    {
        id: 7,
        name: 'Imagine 7',
        imagePath: '../assets/galerie (7).jpeg',
    },
    {
        id: 8,
        name: 'imagine 8',
        imagePath: '../assets/galerie (8).jpeg',
    },
    {
        id: 9,
        name: 'imagine 9',
        imagePath: '../assets/galerie (9).jpeg',
    },
    {
        id: 10,
        name: 'imagine 10',
       imagePath: '../assets/galerie (10).jpeg',
    },
    {
        id: 11,
        name: 'imagine 11',
       imagePath: '../assets/galerie (11).jpeg',
    },
    {
        id: 12,
        name: 'imagine 12',
       imagePath: '../assets/galerie (12).jpeg',
    },
    {
        id: 13,
        name: 'Imagine 13',
        imagePath: '../assets/galerie (13).jpeg',
    },
    {
        id: 14,
        name: 'imagine 14',
        imagePath: '../assets/galerie (14).jpeg',
    },
    {
        id: 15,
        name: 'imagine 15',
        imagePath: '../assets/galerie (15).jpeg',
    },
    {
        id: 16,
        name: 'imagine 16',
       imagePath: '../assets/galerie (16).jpeg',
    },
    {
        id: 17,
        name: 'imagine 17',
       imagePath: '../assets/galerie (17).jpeg',
    },
    {
        id: 18,
        name: 'imagine 18',
       imagePath: '../assets/galerie (18).jpeg',
    },
    {
        id: 19,
        name: 'Imagine 19',
        imagePath: '../assets/galerie (19).jpeg',
    },
    {
        id: 20,
        name: 'imagine 20',
        imagePath: '../assets/galerie (20).jpeg',
    },
];

const Gallery = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState<{ name: string; imagePath: string } | null>(null);

    const handleCardClick = (photo: { name: string; imagePath: string }) => {
        setCurrentPhoto(photo);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setCurrentPhoto(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]} justify="center">
                {photos.map((photo) => (
                    <Col key={photo.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={photo.name} src={photo.imagePath} />}
                            style={{ borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => handleCardClick(photo)}
                        >
                            <Meta title={photo.name} />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={handleModalClose}
                centered
            >
                {currentPhoto && (
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={currentPhoto.imagePath}
                            alt={currentPhoto.name}
                            style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px' }}
                        />
                        <h3 style={{ marginTop: '10px' }}>{currentPhoto.name}</h3>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Gallery;