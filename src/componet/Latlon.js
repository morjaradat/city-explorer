import React from 'react'

 class Latlon extends React.Component {
    render() {
        // console.log('para')
        return (
            <div>
                 {/* style={{visibility:this.state.visibility}} */}
                 <p className='para'>{this.props.location} {this.props.lat} , {this.props.lon}</p>
            </div>
        )
    }
}

export default Latlon;
