import React, { Component } from 'react'

class Error extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }



    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return setTimeout(() => {
                return window.location.reload(true)
            }, 4000),
                <h2 className='error'>Couldn't find a movie! Please try again...</h2>

        }
        return this.props.children;
    }

}

export default Error
