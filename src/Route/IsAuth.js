import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const IsAuth = ({ component: Component, authentication, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authentication.loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

IsAuth.propTypes = {
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  authentication: state.auth
});

export default connect(mapStateToProps)(IsAuth);
