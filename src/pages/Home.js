import React, { useEffect } from "react";
import { getUsersList } from "../redux/actions";
// import { connect } from "react-redux";
import { useDispatch, connect } from "react-redux";
import TableComponent from "../components/TableComponent";

function Home() {
  // const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <div>
      <TableComponent />
    </div>
  );
}

// const mapStateToProps = (state) => {

// }

// function mapStateToProps({ users }) {
//   return { lists: users.lists };
// }

const Ikan = connect()(Home);

export { Ikan };
