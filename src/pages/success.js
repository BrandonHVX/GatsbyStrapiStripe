import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"


function success() {
    return (
        <Layout>
              <div className="container"></div>
            <div className="checkout-page">
            <div classNameName="section-heading text-center mb-5">
              
                <hr className="mb-3" />
              </div>
          
							
							<td colspan="2" className="hidden-xs"></td>
							
						
						
              <div className="container mt-5">
              <div className="checkout">

                <h1>Thank You For Shopping!</h1>
                <p>Your Receipt for this order will be sent to your email.</p>

    	<Link to="/"><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Return To Bonmaket</button></Link>
</div>
</div>
</div>

        </Layout>
    )
}

export default success
