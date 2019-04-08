import React, {Component} from "react";
import { Table } from "react-bootstrap";

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ""}
//    this.handleSubmit = this.handleSubmit.bind(this)
  }
// "asynchronis function": will make call to server, will allow elements of function
// ..to contiune running while others wait
  async componentDidMount() {
    try {
      let response = await fetch('http://localhost:5000/api/entries');
//      let response = await fetch('http://localhost:5000/api/entries?q={or however u interpolate in javascript}');
//      ^^^ if we wanted to add a search function...
      let json = await response.json();
      this.setState({ items: json});
    } catch (erruhs) {
      console.log(erruhs);
    }
  }

  displayDemEntries(entries_here) {
    if (!entries_here){
      return <h1>The entries not here solly like maybe server down or something</h1>
      /// if this "if" not here, will run error if data isn't there, can break.
    }
    return (
      <Table bordered>
        <thead>
          <tr>
            <th> Item: </th>
            <th> Description: </th>
            <th> Logged: </th>
          </tr>
        </thead>
        <tbody>
          { entries_here.map(function(jst_row) {
            return (
              <tr>
                  <td> {jst_row.itemName} </td>
                  <td> {jst_row.itemDescription} </td>
                  <td> {jst_row.date} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
    return entries_here.map(jst_row => <h2> {jst_row.itemName} {jst_row.itemDescription} {jst_row.date} </h2>)
  }

  render() {
    console.log(this.state.items)
    /// ^^^ to see that we're pulling what we intended to
    return this.displayDemEntries(this.state.items)
    /// ^^^ ????
  }

}

export default Entries
