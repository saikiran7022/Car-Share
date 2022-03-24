import React from 'react';
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import 'firebase/app'

import { auth } from '../firebase'
import firebase from 'firebase/app'

const Login = () => {
	return (
		<div id='login-page'>
			<div id='login-card'>
				<img src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/automobile_1f697.png' width="100" height="100"  />
				<h2>Welcome to CarShare!!!! </h2>

				<div
					className='login-button google'
					onClick={() =>
						auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
					}
				>
					<GoogleOutlined /> Sign in with Google
				</div>

				<br />
				<br />

				<div
					className='login-button facebook'
					onClick={() =>
						auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
					}
				>
					<FacebookOutlined /> Sign in with Facebook
				</div>
			</div>
		</div>
	);
}

export default Login;