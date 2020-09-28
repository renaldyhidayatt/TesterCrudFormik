import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail
    // errorUserDetail: state.users.errorUserDetail
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.nama}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.alamat}</td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.umur}</td>
        </tr>
        <tr>
          <td width="200">No HP</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.nohp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
