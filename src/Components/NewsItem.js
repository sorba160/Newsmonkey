import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props
        return (
            <div>
                <div className="card my-2" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                            
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
