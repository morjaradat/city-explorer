import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ClearSky from '../assets/image/Clear Sky.gif'
import Lightrain from '../assets/image/Light rain.gif'
import Brokenclouds from '../assets/image/Broken clouds.gif'
import Fewclouds from '../assets/image/Few clouds.gif'
import Overcastclouds from '../assets/image/Overcast clouds.gif'
import Scatteredclouds from '../assets/image/Scattered clouds.gif'
import Heavyrain from '../assets/image/Heavy rain.gif'
import Moderaterain from '../assets/image/Moderate rain.gif'
import Mixsnowrain from '../assets/image/Mix snowrain.gif'
import Thunderstorm from '../assets/image/Thunderstorm.gif'

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.map(i => {
                    return (
                        <CardGroup>
                            <Card>
                                {i.description === 'Clear Sky' &&
                                <Card.Img variant="top" src={`${ClearSky}`} />
                                }
                                {i.description === 'Light rain' &&
                                <Card.Img variant="top" src={`${Lightrain}`} />
                                }
                                {i.description === 'Broken clouds' &&
                                <Card.Img variant="top" src={`${Brokenclouds}`} />
                                }
                                {i.description === 'Few clouds' &&
                                <Card.Img variant="top" src={`${Fewclouds}`} />
                                }
                                {i.description === 'Overcast clouds' &&
                                <Card.Img variant="top" src={`${Overcastclouds}`} />
                                }
                                {i.description === 'Scattered clouds' &&
                                <Card.Img variant="top" src={`${Scatteredclouds}`} />
                                }
                                {i.description === 'Light shower rain' &&
                                <Card.Img variant="top" src={`${Lightrain}`} />
                                }
                                {i.description === 'Heavy rain' &&
                                <Card.Img variant="top" src={`${Heavyrain}`} />
                                }
                                {i.description === 'Thunderstorm with rain' &&
                                <Card.Img variant="top" src={`${Heavyrain}`} />
                                }
                                {i.description === 'Moderate rain' &&
                                <Card.Img variant="top" src={`${Moderaterain}`} />
                                }
                                {i.description === 'Mix snow/rain' &&
                                <Card.Img variant="top" src={`${Mixsnowrain}`} />
                                }
                                {i.description === 'Thunderstorm' &&
                                <Card.Img variant="top" src={`${Thunderstorm}`} />
                                }
                                <Card.Body>
                                    <Card.Title>{i.description} {i.temp}℃</Card.Title>
                                    <Card.Text>
                                    {i.date}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    )
                })}
            </div>
        )
    }
}



export default Weather;
