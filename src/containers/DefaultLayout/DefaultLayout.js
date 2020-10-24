import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import classes from './DefaultLayout.module.css';
import 'animate.css';

import Search from '../../components/Search';
import UsersContainer from '../UsersContainer';

class DefaultLayout extends Component {

  resetDataHandler = () => {
    this.props.setUserData({});
    this.props.setReposData([]);
  };

  componentDidMount() {
    !!(this.props.usersAll.length === 0) && this.props.getUsersAll();
    !!(this.props.user_repos.length > 0) && this.resetDataHandler();
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
    usersAll: state.users.usersAll,
    user_repos: state.repos.user_repos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersAll: () => dispatch(actionCreators.getUsersAll()),
    setUserData: (user) => dispatch(actionCreators.setUserData(user)),
    setReposData: (data) => dispatch(actionCreators.setReposData(data)),
  }
};

DefaultLayout.propTypes = {
  usersAll: PropTypes.array,
  user_repos: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);