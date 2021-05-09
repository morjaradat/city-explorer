import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'


export class Movies extends Component {
    render() {
        console.log('movie')
        return (
            <div>
                {this.props.movie.map(i => {
                    return (
                        <>
                            {i.imgUrl !== null ?
                            <CardColumns>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${i.imgUrl}`} />
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                        <Card.Text>
                                            {i.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </CardColumns>
                                : false}
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Movies;
