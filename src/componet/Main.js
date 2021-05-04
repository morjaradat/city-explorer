import React from 'react'
import axios from 'axios';
import CitySearch from './CitySearch'
import Latlon from './Latlon'
import Map from './Map'
import Weather from './Weather'

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
            weatherData:{},

        }
    }
    getLocation = async (e) => {
        e.preventDefault();
        // console.log('ture')
        try {
            const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const req = await axios.get(url);
            // console.log('first');
            const req2 = await axios.get(`${process.env.REACT_APP_CLINET}`);
            // console.log('second');
            // console.log(req2.data);
            await this.setState({
                lat: req.data[0].lat,
                lon: req.data[0].lon,
                location: req.data[0].display_name,
                displayMap: true,
                displayError: false,
                weatherData:req2.data
                // visibility: 'visible',
            });
            // console.log('3');

        } catch (err) {
            console.log('out')
            await this.setState({  
                displayMap: false,
                displayError: true,
            });
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
                <CitySearch location={this.getLocation} update={this.update}/>
                {this.state.displayMap &&
                <>
                <Latlon lat ={this.state.lat} lon={this.state.lon} location={this.state.location}/>
                <Map lat ={this.state.lat} lon={this.state.lon}/>
                <Weather data={this.state.weatherData}/>
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
