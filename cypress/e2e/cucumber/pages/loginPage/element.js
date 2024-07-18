const element = {
    attr:{
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '#login-button',
        loginError: '[data-test="error"]',
    },

    placeholder: {
        username: 'Username',
        password: 'Password',
        loginButton: 'LOGIN'

    },

    message: {
        loginError: 'Username and password do not match any user in this service',
        lockedUser: 'Sorry, this user has been locked out.',

    },

    route: {
        loggedUser: '/v1/inventory.html',
    },
}

export default element
