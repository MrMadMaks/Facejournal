import {Component} from "react";
import c from "./Card.module.css"

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        content: '',
        image: ''
    }

    render() {

        const {title, description, image} = this.props

        return(
            <div className={c.card}>
                <h2 className={c.cardTitle}>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <div className={c.cardImage}>
                    <img src={image}/>
                </div>
            </div>
        )
    }
}