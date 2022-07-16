import React from 'react';
import { Card, Container } from 'react-bootstrap'
import bg4 from '../../assets/img/bg4.jpeg'

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white border-0">
                <Card.Img src={bg4} alt="Card image" height="550px" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                    <Container>
                    <Card.Title className="display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</Card.Title>
                    <Card.Text className="lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </Card.Text>
                    </Container>
                    
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Home