import React from "react";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const defaultSorted = [
  {
    dataField: "id",
    order: "asc"
  }
];
const { SearchBar } = Search;

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      }
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                Edit
              </Button>
            </Link>
            {/* <Button
              color="dark"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button> */}
          </div>
        );
      }
    }
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          <Spinner color="dark" />
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.lists
  };
};

export default connect(mapStateToProps, null)(TableComponent);
