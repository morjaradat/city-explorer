import React from 'react'
import axios from 'axios';
import CitySearch from './CitySearch'
import Latlon from './Latlon'
import Map from './Map'

export class main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            lat: '',
            lon: '',
            location: '',
            displayMap: false,
            displayError: false,

        }
    }
    getLocation = async (e) => {
        e.preventDefault();
        // console.log('ture')
        try {
            // console.log('in')
            const url = `https://us1.locationiq.com/v1/search.php?key=pk.87b4d39520431699954da6faf9d059cc&q=${this.state.searchQuery}&format=json`;
            const req = await axios.get(url);
            // console.log('in 2');
            // console.log(req.data[0]);
            await this.setState({
                lat: req.data[0].lat,
                lon: req.data[0].lon,
                location: req.data[0].display_name,
                displayMap: true,
                displayError: false,
                // visibility: 'visible',
            });

        } catch (err) {
            // console.log('out')
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

export default main;
