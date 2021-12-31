import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container-fluid p-0'>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="assets/img/404_logo.png" className="rounded-circle" alt="404 logo" />
        <h1 className="display-5 fw-bold">404 Page Not Found</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">URL not found.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link className="btn btn-outline-secondary btn-lg px-4" to="/">Go Back To Home.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
