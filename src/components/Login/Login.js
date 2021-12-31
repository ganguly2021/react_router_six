import React, { useState, useEffect } from 'react'

function Login() {
  const schema = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState({ ...schema })

  useEffect(() => {

    // cleanup
    return () => {
      setFormData({ ...schema })
    }
  }, [])

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let newData = {
      ...formData,
      [name]: value
    }

    // update form data
    setFormData({ ...newData })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    // clear form fields
    setFormData({ ...schema })
  }

  return (
    <div className="modal modal-signin position-static d-block py-5" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-5 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}
            <h2 className="fw-bold mb-0">Login Here</h2>
            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
          </div>

          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleFormSubmit}>
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-4" id="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-4" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                <label htmlFor="password">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Login</button>
              <small className="text-muted">By clicking login, you agree to the terms of use.</small>
              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                <i className="fab fa-twitter text-primary fa-2x me-3"></i>
                Sign up with Twitter
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                <i className="fab fa-facebook text-primary fa-2x me-3"></i>
                Sign up with Facebook
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                <i className="fab fa-github fa-2x me-3"></i>
                Sign up with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
