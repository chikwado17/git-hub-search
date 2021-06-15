

const alertReducer = (state, action) => {
    switch(action.type) {

        case 'ADD_ALERT':
            return {
                alert: true
            }

        case 'REMOVE_ALERT':
            return {
                alert: false
            }

        default:
            return state;
    }
}

export default alertReducer;