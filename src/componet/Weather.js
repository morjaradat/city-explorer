import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render() {
        return (
            <Card style={{ width: '10rem' }}>
                <ListGroup variant="flush">
                    {this.props.data.map(i => {
                        return (
                            <ListGroup.Item>{i.date} {i.description}</ListGroup.Item>
                        )
                    })}

                </ListGroup>
            </Card>
        )
    }
}


export default Weather;
