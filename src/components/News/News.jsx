// import React, {useEffect, useState} from "react";
// import c from "./News.module.css";
//
// const News = () => {
//
//     const[news, setNews] = useState();
//
//     useEffect(() => {
//         fetch('https://gnews.io/api/v4/{endpoint}?token=449f83da90ee1b7331ae999e4ec2b23e')
//             .then(responce => responce.json())
//             .then(result => {
//                 setNews({news: result.data})
//             })
//     });
//
//     return (
//         <section className={c.news}>
//             {news}
//         </section>
//     )
// }
import {Component} from "react";
import CardList from "./CardList/CardList";
import c from './News.module.css'

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        fetch('https://gnews.io/api/v4/search?q=example&token=449f83da90ee1b7331ae999e4ec2b23e')
            .then(response => response.json())
            .then(articles => {
                this.setState({news: articles.data});
            })
    }

    render() {
        return (
            <div className={c.News}>
                <h1>NEWS</h1>
                <CardList userList={this.state.news}/>
            </div>
        )
    }
}