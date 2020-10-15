import React from 'react';
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

            <Row>
              {renderUsers()}
            </Row>
        }
      </CardBody>
    </Card>
  )
};

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    usersAll: state.users.usersAll
  }
};

export default connect(mapStateToProps, null)(UsersContainer);