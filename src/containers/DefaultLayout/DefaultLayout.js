import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import classes from './DefaultLayout.module.css';
import 'animate.css';

import Search from '../../components/Search';
import UsersContainer from '../UsersContainer';

class DefaultLayout extends Component {
  _isMounted = false;

  UNSAFE_componentWillMount() {
    this._isMounted = true;
    !!(this.props.usersAll.length === 0) && this.props.getUsersAll();
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  render() {

    return (
      <>
        <Card className={[classes.Card].join(' ')}>
          <CardBody className="p-4">

            <Search />

          </CardBody>
        </Card>

        <UsersContainer />
      </>
    )
  };
};

const mapStateToProps = state => {
  return {
    usersAll: state.users.usersAll
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersAll: () => dispatch(actionCreators.getUsersAll())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);