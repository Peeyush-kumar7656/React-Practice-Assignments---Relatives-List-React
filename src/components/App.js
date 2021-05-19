import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
    render() {
        const relative_names=[
            {id:"relativeListItem1", key:"Aakash Singh"},
            {id:"relativeListItem2", key:"Ajay Singh"},
            {id:"relativeListItem3", key:"Sweta Singh"},
            {id:"relativeListItem4", key:"Tarun Singh"}
        ]
        const list_of_relatives=relative_names.map((name)=>
        <li keys={name.id}>{name.key}</li>
        );
        return(
            <div id="main">
            <ol key={"relativeList"}>{list_of_relatives}</ol>
            </div>
        )
    }
}
export default App;
