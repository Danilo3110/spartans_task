import React from 'react';
import { Row, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/all';
import classes from './ReposContainer.module.css';

import Loading from '../../components/Loading';
import RepoCard from '../../components/RepoCard';

const ReposContainer = props => {

  const renderUserRepos = () => {
    return [...props.user_repos].map(repo => <RepoCard data={repo} key={repo.id} />);
  };

  return (
    <>
      <Button type="button" color='primary' className="mb-3 text-uppercase" onClick={() => props.history.goBack()}>
        <TiArrowBackOutline className="font-xl mb-1" /> {'Go back'}
      </Button>

      <Card>
        <CardHeader>
          <h4 className="text-capitalize mb-0 text-info">{`${(props.selected_user.login) ? props.selected_user.login : ''} repos:`}</h4>
        </CardHeader>
        <CardBody className={['p-4', classes.Container].join(' ')}>
          {
            !!(props.loading && props.user_repos.length > 0) ?

              <Loading /> :

              <Row>
                {renderUserRepos()}
              </Row>
          }
        </CardBody>
      </Card>
    </>
  )
};

const mapStateToProps = state => {
  return {
    loading: state.repos.loading,
    user_repos: state.repos.user_repos,
    selected_user: state.users.selected_user
  }
};

export default connect(mapStateToProps, null)(ReposContainer);