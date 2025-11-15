import { Card } from 'antd'
export const CardFoto = (
    {name, description, imagePath, imageDesc}:
    {   name:string,
        description:string,
        imagePath:string,
        imageDesc?:string 
    }) => {
    return(
        <Card
        style={{ width: 340, height: 400 }} 
        cover={<img alt={imageDesc} src={imagePath} />}
      >
        <Card.Meta title={name} description={description} />
      </Card>
    );
};