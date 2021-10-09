import React from 'react'
import dateFormat from 'dateformat'
const LoadComments = (props) => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id} className="Comments" style={{ border: "1px solid black", padding: "8px", margin: "10px auto", borderRadius: "5px", boxShadow: "4px 4px gray" }}>
                    <h5><span style={{ fontSize: "14px" }}>Author:</span> {comment.author}</h5>
                    <p><span style={{ fontSize: "14px", fontWeight: "500" }}>Comment:</span> {comment.comment}</p>
                    <p><span style={{ fontSize: "14px", fontWeight: "500" }}>Rating:</span> {comment.rating}</p>
                    <p><span style={{ fontSize: "14px", fontWeight: "500" }}>Date:</span> {dateFormat(comment.date, "dddd,mmmm dS,yyyy,h:MM:ss TT")}</p>
                    
                </div>
            )
        })

    )
}

export default LoadComments;