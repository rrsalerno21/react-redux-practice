const increment = (num = 1) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
};

const decrement = (num = 1) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
};

const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export {increment, decrement, signIn};