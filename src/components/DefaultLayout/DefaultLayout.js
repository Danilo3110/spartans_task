import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
// import { Row, Col } from 'reactstrap';

class DefaultLayout extends Component {
    _isMounted = false;
    state = {

    };

    UNSAFE_componentWillMount() {
        this._isMounted = true;
        this.props.getUsersAll();
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    render() {

        return (
            <div>

            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        loading: state.users.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        startLoading: () => dispatch(actionCreators.startLoading()),
        getUsersAll: () => dispatch(actionCreators.getUsersAll())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);