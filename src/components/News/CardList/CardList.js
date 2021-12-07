import {Component} from "react";
import c from "./CardList.module.css"
import Card from "../Card/Card";

export default class CardList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        userList: []
    }

    render() {

        return(
            <div className={c.cardList}>

                {
                    this.props.userList.map((user) => {
                        return(
                            <Card
                                title={user.title}
                                content={user.content}
                                avatar={user['avatar']} />
                        )
                    })
                }
            </div>
        )
    }
}