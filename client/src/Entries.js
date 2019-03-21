import React, { Component } from "react";
import { Table } from "react-bootstrap";
import DeleteEntry from "./DeleteEntry";
class Entries extends Component {
  displayItems(items) {
    console.log("ready");
    if (!items) {
      console.log("no");
      return <div />;
    }
    console.log("yes");
    return (
      <div>
        <br />
        <Table bordered>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Date</th>
              <th>Location</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {items.map(function(item) {
              return (
                <tr key={item.entryId}>
                  <td>
                    {" "}
                    {item.item}
                    <DeleteEntry item={item.entryId} />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td>
                    {item.latitude}, {item.longitude}
                  </td>
                  <td>
                    <img
                      alt="display form"
                      src={`data:image/jpeg;base64,${item.image}`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return this.displayItems(this.props.items);
  }
}

export default Entries;
