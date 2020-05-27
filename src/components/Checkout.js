import React from 'react'

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'

const stripe = loadStripe('pk_live_M1OKOCNbvjhiPvYri3baUl3400FJwYKxJ7')

export default () => (
    <div>
        <Elements stripe={stripe}>
            <CheckoutForm />
        </Elements>
    </div>
)