import {useState} from 'react'
import {Link} from 'react-router-dom'

function ForgotPassword() {

    const INITIAL_USER_OBJ = {
        emailId: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)")
        else {
            setLoading(true)
            // Call API to send password reset link
            setLoading(false)
            setLinkSent(true)
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setUserObj({...userObj, [updateType]: value})
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Forget Password</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div>
                        <Link to={'/'} className={'link link-success'}>{'Back to home page'}</Link>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={submitForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required/>
                        </div>

                        <h1 className="text-l font-bold pt-4">We will send password reset link on your email.</h1>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Reset Link</button>
                        </div>
                        <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><span
                            className="inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200 link-primary underline">Register</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword