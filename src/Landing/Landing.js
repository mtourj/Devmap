import React from 'react';

import { connect } from 'react-redux';

const Landing = props => {
  if(props.token) {
    props.history.push('/maps');
  }

  return (
    <div className='landing'>
      <h1>I am the landing page of Devmap!</h1>  
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps, {})(Landing);