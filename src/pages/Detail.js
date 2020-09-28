import React, { useEffect } from "react";
import { Container } from "reactstrap";
// import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../redux/actions";
import DetailUserComponent from "../components/DetailComponent";
import { useDispatch } from "react-redux";

function DetailUserContainer(props) {
  const { id } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUserDetail(id));
    } else {
      props.history.push("/");
    }
  }, []);
  return (
    <Container>
      {/* <BackComponent /> */}
      <h1>Detail User</h1>
      <DetailUserComponent />
    </Container>
  );
}

export default connect()(DetailUserContainer);
