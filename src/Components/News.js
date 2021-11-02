import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: "in",
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        category:PropTypes.string,
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            totalResults: [],
            loading: false,
            page: 1
        }
        document.title= `NM-${this.props.category}`
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903f4911f02748bebbf08321916f0393&page=1`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903f4911f02748bebbf08321916f0393&page=${this.state.page + 1}&pageSize=20`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({ articles: parsedData.articles })

            this.setState({
                page: this.state.page + 1,
                loading: false
            })
        }
    }
    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903f4911f02748bebbf08321916f0393&page=${this.state.page - 1}&pageSize=20`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center"> Newsmonkey-Top headlines  {this.props.category} </h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem key={element.url} title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>



                    })}
                    <div className=" container d-flex justify-content-between my-3">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
