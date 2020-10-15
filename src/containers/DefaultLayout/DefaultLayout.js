import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import classes from './DefaultLayout.module.css';
import 'animate.css';

import Loading from '../../components/Loading';
import Search from '../../components/Search';

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
      <div className={[classes.Wrapper].join(' ')}>
        <div className={[classes.Content].join(' ')}>
          {
            (this.props.loading) ?

              <Loading /> :

              <>
                <div className={classes.LayoutBg}>
                  <span className={[classes.Circle].join(' ')}></span>
                  <span className={[classes.Circle, classes.Small].join(' ')}></span>
                  <span className={[classes.Circle, classes.Small].join(' ')}></span>
                  <span className={[classes.Circle].join(' ')}></span>
                </div>
                <Card className={[classes.Card].join(' ')}>
                  <CardBody className="p-4">

                    <Search />

                  </CardBody>
                </Card>
              </>
          }
        </div>
      </div>
    )
  };
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