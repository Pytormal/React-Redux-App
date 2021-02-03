import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { retrieveQuote } from '../actions'

const Quotes = ({ quote, isFetching, error, ...props}) => {
    useEffect(() => {
    })
    
    if (error) {
        return <h4>a error has occured, try again: {error}</h4>
    }

    if (isFetching) {
        return <h3>retrieving a quote for your enjoyment</h3>
    }

    return (
        <>
            <h3>Taylor Swift: {quote}</h3>
            <button>Get More Quotes</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { retrieveQuote }) (Quotes)