import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
  }
  async componentDidMount() {
    try {
      let response = await fetch(`http://localhost:5000/api/entries`);
      let json = await response.json();
      this.setState({ items: json });
    } catch (e) {
      console.log(e);
    }
  }
  displayItems(items) {
    if (!items) {
      return <div />;
    }
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
            </tr>
          </thead>
          <tbody>
            {items.map(function(item) {
              return (
                <tr key={item.item}>
                  <td>{item.item}</td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td>
                    {item.latitude}, {item.longitude}
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
    return this.displayItems(this.state.items);
  }
}

export default Entries;
