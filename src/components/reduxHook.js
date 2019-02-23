import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions/actionCreators';
import App from '../App';

function mapStateToProps(state) {
    return {
        posts: state.posts,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,
        dispatch);
}

const reduxHook = connect(mapStateToProps, 
    mapDispatchToProps, App);

export default reduxHook;
