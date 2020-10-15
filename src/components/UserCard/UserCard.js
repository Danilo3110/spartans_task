import React from 'react';
import PropTypes from "prop-types";
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import classes from './UserCard.module.css';

const UserCard = props => {

  const clickHandler = (user, username) => {
    props.setUserData(user);
    props.getReposData(username);
  };

  return (
    <Col sm="4" md="4" xl="4" className={[classes.Container].join(' ')}>
      <Link to="/repos" onClick={() => clickHandler(props.data, props.data.login)} className={classes.UserLink}>
        <Card className={classes.Card}>
          <CardBody className="p-2">
            <Row>
              <Col sm="5" md="5" xl="5">
                <div className={['m-2', classes.CardImg].join(' ')} style={{ backgroundImage: `url('${props.data.avatar_url}')` }}></div>
              </Col>
              <Col sm="7" md="7" xl="7">
                <div className="mb-5 h4 text-capitalize">{props.data.login}</div>
                <div className={['text-muted', classes.Description].join(' ')}>{props.data.url}{props.data.url}</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Link>
    </Col>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    getReposData: (username) => dispatch(actionCreators.getReposData(username)),
    setUserData: (user) => dispatch(actionCreators.setUserData(user))
  }
};

UserCard.propTypes = {
  data: PropTypes.object
};

export default connect(null, mapDispatchToProps)(UserCard);