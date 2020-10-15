import React from 'react';
import PropTypes from "prop-types";
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import { BsCalendar, GrLicense, GoRepoForked, FaEye, FaStar } from 'react-icons/all';
import { formatDate } from '../Functions';
import classes from './RepoCard.module.css';

const RepoCard = props => {

  return (
    <Col sm="6" md="6" xl="6" className={[classes.Container].join(' ')}>
      <Card className={classes.Card}>
        <CardBody className="p-4">
          <div className="mb-5 h4 text-success">{props.data.name}</div>
          <div className={['text-muted h5', classes.Description].join(' ')}>{!!(props.data.description) && props.data.description}</div>
          <div className="text-secondary font-xs">
            <GrLicense className="font-xl mr-1" />
            {'License: '}
            {(props.data.license) ? props.data.license.name : '/'}
          </div>
          <Col sm="12" md="12" xl="12" className="mt-5 mb-4">
            <a href={`${props.data.clone_url}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <Button type="button" color='success' outline block className={[classes.SearchButton].join(' ')}>
                {'Open in new tab'}
              </Button>
            </a>
          </Col>
          <Row>
            <Col sm="4" md="4" xl="4" className="text-center text-dark">
              <FaStar className="font-xl mr-1" />
              {props.data.stargazers_count}
            </Col>
            <Col sm="4" md="4" xl="4" className="text-center text-dark">
              <FaEye className="font-xl mr-1" />
              {props.data.watchers_count}
            </Col>
            <Col sm="4" md="4" xl="4" className="text-center text-dark">
              <GoRepoForked className="font-xl mr-1" />
              {props.data.forks_count}
            </Col>
          </Row>
          <div className="text-muted mt-5">
            <BsCalendar className="font-lg mr-2" />
            <span className="mr-2">{'Date created:'}</span>
            {formatDate(props.data.created_at)}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

RepoCard.propTypes = {
  data: PropTypes.object
};

export default RepoCard;