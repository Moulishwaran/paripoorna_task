import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

function DataList() {
  const [userList, setUserList] = useState([]);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    {
      dataField: "username",
      text: "Username",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "email", text: "Email", sort: true, filter: textFilter() },
    { dataField: "phone", text: "Phone", sort: true, filter: textFilter() },
    { dataField: "website", text: "Website", sort: true, filter: textFilter() },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={userList}
        pagination={pagination}
        filter={filterFactory()}
      />
      {/*<table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        {userList && userList.length > 0
          ? userList.map((usr) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
              </tr>
            ))
          : "Loading"}
          </table>*/}
    </div>
  );
}

export default DataList;
