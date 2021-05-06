import React from 'react'
import axios from 'axios';
import CitySearch from './CitySearch'
import Latlon from './Latlon'
import Map from './Map'
import Weather from './Weather'
import Movies from './Movies'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            lat: '',
            lon: '',
            location: '',
            displayMap: false,
            displayError: false,
            weatherData: {},
            movieData: {},

        }
    }
    getLocation = async (e) => {
        e.preventDefault();
        // console.log('ture')

        try {
            console.log('q1');
            const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const req = await axios.get(url);
            console.log('first');
            await this.setState({
                lat: req.data[0].lat,
                lon: req.data[0].lon,
                location: req.data[0].display_name,
            });
            this.weatherReq();
            this.movieReq();

        } catch (err) {
            console.log('out')
            await this.setState({
                displayMap: false,
                displayError: true,
            });
        }

    }
    weatherReq = async () => {
        console.log('q2');
        const req2 = await axios.get(`${process.env.REACT_APP_CLINET}?lat=${this.state.lat}&lon=${this.state.lon}`);
        console.log(req2.data);
        this.setState({
            weatherData: req2.data
        });
    }
    movieReq = async () => {
        try {
            let movieUrl = process.env.REACT_APP_MOVIE_API_URL
            const req3 = await axios.get(`${movieUrl}?query=${this.state.searchQuery}`);
            console.log(req3.data);
          await  this.setState({
                movieData: req3.data,
                displayMap: true,
                displayError: false,
            });
            console.log('q3');

        } catch (error) {
            console.log('Error');
        }


    }
    update = (e) => {
        this.setState({ searchQuery: e.target.value })
        // console.log(this.state.searchQuery)
    }

    render() {
        // console.log('dispaly map',this.state.displayMap);
        return (
            <div>
                <CitySearch location={this.getLocation} update={this.update} />
                {this.state.displayMap &&
                    <>
                        <Latlon lat={this.state.lat} lon={this.state.lon} location={this.state.location} />
                        <Map lat={this.state.lat} lon={this.state.lon} />
                        <Weather data={this.state.weatherData} />
                        <Movies movie={this.state.movieData} />
                    </>
                }

                {this.state.displayError &&
                    <>
                        <p className='para'>Error failed with status code 400 </p>
                    </>
                }
            </div>
        )
    }
}

export default Main;
