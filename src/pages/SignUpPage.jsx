import { useState } from "react";

function SignUp() {

    const [userUpData, setUserUpData] = useState({
        name: null,
        email: null,
        usrName: null,
        password: null,
        confPassword: null
    });
    const [errorsMsgUp, setErrorsMsgUp] = useState({
        nameError: null,
        emailError: null,
        usrNameError: null,
        passwordError: null,
        confPasswordError: null
    });

    const handleData = (e) => {
        if (e.target.name === 'name') {
            setUserUpData({
                ...userUpData,
                name: e.target.value
            });
            setErrorsMsgUp({
                ...errorsMsgUp,
                nameError: e.target.value.length === 0 ? "This Field Is Required" :
                    !e.target.value.match(/^[a-z0-9_-]{3,15}$/) && "Invalid Name"
            });
        }
        if (e.target.name === 'email') {
            setUserUpData({
                ...userUpData,
                email: e.target.value
            });
            setErrorsMsgUp({
                ...errorsMsgUp,
                emailError: e.target.value.length === 0 ? "This Field Is Required" :
                    !e.target.value.match(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/) && "Invalid Email Address"
            });
        }
        if (e.target.name === 'usrName') {
            setUserUpData({
                ...userUpData,
                usrName: e.target.value
            });
            setErrorsMsgUp({
                ...errorsMsgUp,
                usrNameError: e.target.value.length === 0 ? "This Field Is Required" :
                    !e.target.value.match(/^[a-z0-9_-]{3,15}$/) && "Invalid User Name"
            });
        }
        if (e.target.name === 'password') {
            setUserUpData({
                ...userUpData,
                password: e.target.value
            });
            setErrorsMsgUp({
                ...errorsMsgUp,
                passwordError: e.target.value.length === 0 ? "This Field Is Required" :
                    !e.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) && "Weak Password" && e.target.value !== userUpData.confPassword && "Password Not Matched"
            });
        }
        
        if (e.target.name === 'confPassword') {
            setUserUpData({
                ...userUpData,
                confPassword: e.target.value
            });
            setErrorsMsgUp({
                ...errorsMsgUp,
                confPasswordError: e.target.value.length === 0 ? "This Field Is Required" :
                    !e.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) && "Weak Password" && e.target.value !== userUpData.password && "Password Not Matched"
            });
        }

    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <section className="border rounded p-5 my-5">
            <form onSubmit={(e) => submitForm(e)}>
                <div className="mb-3 text-start">
                    <label htmlFor="inputName" className="form-label fw-bold fs-5">Name</label>
                    <input id="inputName" required type="text"
                        className={`input is-link ${errorsMsgUp.nameError == null ? "input is-link" : errorsMsgUp.nameError ? "is-invalid" : "is-valid"}`}
                        value={userUpData.name}
                        name="name"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text">{errorsMsgUp.nameError}</p>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="inputEmail" className="form-label fw-bold fs-5">Email Address</label>
                    <input id="inputEmail" required type="email"
                        className={`input is-link ${errorsMsgUp.emailError == null ? "input is-link" : errorsMsgUp.emailError ? "is-invalid" : "is-valid"}`}
                        value={userUpData.email}
                        name="email"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text">{errorsMsgUp.emailError}</p>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="userName" className="form-label fw-bold fs-5">User Name</label>
                    <input id="userName" required type="text"
                        className={`input is-link ${errorsMsgUp.usrNameError == null ? "input is-link" : errorsMsgUp.usrNameError ? "is-invalid" : "is-valid"}`}
                        value={userUpData.usrName}
                        name="usrName"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text">{errorsMsgUp.usrNameError}</p>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="inputPassword" className="form-label fw-bold fs-5">Password</label>
                    <input id="inputPassword" required type="password"
                        className={`input is-link ${errorsMsgUp.passwordError == null ? "input is-link" : errorsMsgUp.passwordError ? "is-invalid" : "is-valid"}`}
                        value={userUpData.password}
                        name="password"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text">{errorsMsgUp.passwordError}</p>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="inputPasswordConf" className="form-label fw-bold fs-5">Confirm Password</label>
                    <input id="inputPasswordConf" required type="password"
                        className={`input is-link ${errorsMsgUp.confPasswordError == null ? "input is-link" : errorsMsgUp.confPasswordError ? "is-invalid" : "is-valid"}`}
                        value={userUpData.confPassword}
                        name="confPassword"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text">{errorsMsgUp.confPasswordError}</p>
                </div>
                <button type="submit" className="button is-success mt-5 w-25">Register</button>
            </form>
        </section>
    );
}

export default SignUp;