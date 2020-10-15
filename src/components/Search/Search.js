import React, { Component } from 'react';
import { Button, Row, Col, Input, InputGroup, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import { api_axios } from '../../api';
import { handleErrors } from '../Functions';
import { FaSearch, BsSearch, FaBan } from 'react-icons/all';
import classes from './Search.module.css';

class Search extends Component {
  _isMounted = false;
  state = {
    search_user: ''
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  keyPressed = event => {
    !!(event.key === "Enter") && this.searchHandler();
  };

  searchHandler = (type = 'search') => {
    if (type === 'reset') {
      this.setState({ search_user: '' });
      this.props.setSearchData('');
      this.props.getUsersAll();
    } else {
      const { search_user } = this.state;
      const name = (search_user !== '') ? `${search_user}` : '';

      this.props.setSearchData(name);
      (name !== '') ? this.getUserData(name) : this.props.getUsersAll();
    }
  };

  getUserData = async (search) => {
    try {
      const response = await api_axios('GET', `/users/${search}?per_page=10`, null);
      const userData = response.data;
      this.props.setUsersAll([userData]);
    } catch (error) {
      handleErrors(error);
    }
  };

  componentDidMount() {
    this._isMounted = true;
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  render() {

    return (
      <>
        <h2 className={classes.Company}>Spartans</h2>
        <hr className="mt-0 mb-3 text-muted" />
        <Row>
          <Col sm="12" md="6" xl="6" className="pt-1 pb-1">
            <InputGroup className="mb-3">
              <InputGroupText>
                <FaSearch className="font-xl" />
              </InputGroupText>
              <Input type="text" name="search_user" placeholder={'Enter user name'} onChange={this.inputHandler} onKeyPress={this.keyPressed} value={this.state.search_user} id="search_user" autoComplete="search_user" tabIndex="1" />
            </InputGroup>
          </Col>
          <Col sm="12" md="12" xl="6" className="text-right pt-1 pb-1">
            <Button type="button" color='success' onClick={this.searchHandler} className={['text-uppercase', classes.SearchButton].join(' ')} disabled={this.props.spinner} tabIndex="2">
              <BsSearch className="font-xl pb-1" /> {'Search'}
              <span className={`spinner-border ml-3 spinner-border-sm ${!!(!this.props.spinner) && 'd-none'}`} style={{ width: '1.4rem', height: '1.4rem' }}></span>
            </Button>
            <Button type="reset" color='danger' onClick={() => this.searchHandler('reset')} className="ml-3 text-uppercase" tabIndex="3"><FaBan className="font-xl pb-1" /> {'Reset'}</Button>
          </Col>
        </Row>
      </>
    )
  };
};

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    search: state.search.search_user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchData: (search) => dispatch(actionCreators.setSearchData(search)),
    setUsersAll: (data) => dispatch(actionCreators.setUsersAll(data)),
    getUsersAll: () => dispatch(actionCreators.getUsersAll())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);