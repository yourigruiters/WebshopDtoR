import React from 'react';
import AccountLogin from './AccountLogin';
import AccountRegister from './AccountRegister';

const Login = () => {
    return (
        <div id="content">
            <div className="container-fluid">
                <div className="row">
                    <AccountLogin />
                    <AccountRegister />
                </div>
            </div>
        </div>
    )
}

export default Login;