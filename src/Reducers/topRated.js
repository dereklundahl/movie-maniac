// a reducer takes in two things
//1. the action
// 2. a copy of current state

function popular(state = [], action) {
    console.log(state, action);
    return state;
}

export default popular;