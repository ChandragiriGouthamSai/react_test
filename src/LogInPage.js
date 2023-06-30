import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {Navigate} from "react-router-dom";

import './index.css'
import {Card, TextField} from "@mui/material";

class LoginPage extends Component {
    state = {
        userName: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
    }

    onChangeUsername = event => {
        this.setState({userName: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onSubmitSuccess = jwtToken => {
        const {history} = this.props

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        })
        // history.replace('/')
    }

    onSubmitFailure = errorMsg => {
        this.setState({showSubmitError: true, errorMsg})
    }

    submitForm = async event => {
        event.preventDefault()
        const {userName, password} = this.state
        const userDetails = {userName, password}
        const url = 'https://ue6r67v663n4i5minaxceke4240imgwt.lambda-url.ap-northeast-1.on.aws/SearchAPI?au=0'
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'x-search-action': 'user-signin'},
            body: JSON.stringify(userDetails),
        }
        console.log(options)
        console.log(options.body)
        const response = await fetch(url, options)
        console.log("response" + JSON.stringify(response));
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
            return <Navigate to={"/source"}/>
            console.log("successfully logged")
        } else {
            this.onSubmitFailure(data.error_msg)
        }
    }

    renderPasswordField = () => {
        const {password} = this.state

        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <TextField
                    type="password"
                    id="password"
                    className="password-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                />
            </>
        )
    }

    renderUsernameField = () => {
        const {userName: userName} = this.state

        return (
            <>
                <label className="input-label" htmlFor="userName">
                    USERNAME
                </label>
                <TextField
                    type="text"
                    id="userName"
                    className="userName-input-field"
                    value={userName}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                />
            </>
        )
    }

    render() {
        const {showSubmitError, errorMsg} = this.state
        const jwtToken = Cookies.get('jwt_token')
        console.log(jwtToken)


        return (
            <div className="login-form-container">
                <center>
                    <form className="form-container" onSubmit={this.submitForm}>
                        <Card label={"Username"}>{this.renderUsernameField()}</Card>
                        <Card label={"password"}>{this.renderPasswordField()}</Card>

                        {/*<div className="input-container">{this.renderUsernameField()}</div>*/}
                        {/*<div className="input-container">{this.renderPasswordField()}</div>*/}
                        <button type="submit" className="login-button btn btn-primary">
                            Login
                        </button>
                        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    </form>
                </center>
            </div>
        )
    }
}

export default LoginPage;