import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const Hacks = ({hackData}) =>{
    return (
        <div className="hackList">
            <span className="comments">
                {hackData.num_comments}
            </span>
            <span className="comments">
                {hackData.points}
            </span>
            <span className="news-title">
                {hackData.title}
            </span>
            <span className="comments">
                ({hackData.url.split('/')[2]})
            </span>
            <span className="comments">
                by {hackData.author}
            </span>
           {/* <ReactTimeAgo data={hackData.created_at}/> */}
        </div>
    )
}


export default Hacks