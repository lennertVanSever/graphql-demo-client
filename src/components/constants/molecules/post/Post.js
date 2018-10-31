import React from 'react';
import { AuthorName } from "../../atoms";
import { NewComment } from "../index";
import { Comment } from "../../molecules";

function generateComments(comments){
    return comments.map((comment, index) => <Comment key={index} data={comment} />);
}

export default ({data: { title, description, Comments, Author, id }, children, index}) => (
    <div className="card post">
        <h3>{title}</h3>
        <p>{description}</p>
        <AuthorName data={Author} />
        <div className="comments">
            {generateComments(Comments)}
            <NewComment postIndex={index} postId={id} />
        </div>
    </div>
)