import React from 'react';

import Login from '../Login/Login';

const withAuth = props => Component => {
  return (
    <div>
    {
      props.token ? Component : <Login {...props} />
    }
    </div>
  )
}

export default withAuth;