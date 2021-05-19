import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
    render() {
        const relative_names=[
            {id:"relativeListItem1", k:"Aakash Singh"},
            {id:"relativeListItem2", k:"Ajay Singh"},
            {id:"relativeListItem3", k:"Sweta Singh"},
            {id:"relativeListItem4", k:"Tarun Singh"}
        ]
        const list_of_relatives=relative_names.map((name)=>
        <li key={name.id}>{name.k}</li>
        );
        return(
            <div id="main">
            <ol key={"relativeList"}>{list_of_relatives}</ol>
            </div>
        )
    }
}
export default App;
