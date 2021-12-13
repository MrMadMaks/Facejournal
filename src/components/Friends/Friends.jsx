import {Component} from "react";
import CardList from "./CardList/CardList";
import c from "./Friends.module.css";

export default class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?per_page=12')
            .then(responce => responce.json())
            .then(result => {
                this.setState({users: result.data})
            })
    }

    render() {
        return (
            <div className={c.friends}>
                <h1>My friends</h1>
                <CardList userList={this.state.users}/>

            </div>
        )
    }
}