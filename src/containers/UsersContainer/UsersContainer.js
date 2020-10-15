import React from 'react';
import PropTypes from "prop-types";
import { Row, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import classes from './UsersContainer.module.css';

import Loading from '../../components/Loading';
import UserCard from '../../components/UserCard';

const UsersContainer = props => {

  const renderUsers = () => {
    return [...props.usersAll].map(user => <UserCard data={user} key={user.id} />);
  };

  return (
    <Card className={[classes.Container].join(' ')}>
      <CardBody className="p-4">
        {
          !!(props.loading) ?

            <Loading /> :

            ((props.errors !== '') ? <div className="text-danger h4 m-5 text-center">{props.errors}</div> : <Row>{renderUsers()}</Row>)
        }
      </CardBody>
    </Card>
  )
};

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    usersAll: state.users.usersAll,
    errors: state.users.errors
  }
};

UsersContainer.propTypes = {
  loading: PropTypes.bool,
  usersAll: PropTypes.array,
  errors: PropTypes.string
};

export default connect(mapStateToProps, null)(UsersContainer);