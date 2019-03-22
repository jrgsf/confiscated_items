import React, { Component } from "react";
import { Table } from "react-bootstrap";
import DeleteEntry from "./DeleteEntry";
import MapContainer from "./MapContainer";
class Entries extends Component {
  displayItems(items) {
    if (!items) {
      return <div />;
    }
    return (
      <div style={{ fontSize: 14 }}>
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
                    <DeleteEntry item={item.entryId} />
                    {item.item}
                  </td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td>
                    {item.latitude}, {item.longitude}
                    <MapContainer lat={item.latitude} lng={item.longitude} />
                  </td>
                  <td>
                    {item.image !== undefined && (
                      <img
                        style={{ height: 150 }}
                        alt="display form"
                        src={`data:image/jpeg;base64,${item.image}`}
                      />
                    )}
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
