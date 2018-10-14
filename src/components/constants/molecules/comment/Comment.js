import React from 'react';
import { AuthorName } from "../../atoms";

export default ({data}) => (
    <div className="comment">
        <p>{data.description}</p>
        <AuthorName data={data.Author} />
    </div>
)