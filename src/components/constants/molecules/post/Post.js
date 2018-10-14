import React from 'react';
import { AuthorName } from "../../atoms";
import { NewComment } from "../index";

export default ({data, children, index}) => (
    <div className="post">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <AuthorName data={data.Author} />
        <div className="comments">
            {children}
            <NewComment postIndex={index} postId={data.id} />
        </div>
    </div>
)