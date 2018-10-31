import React from 'react';
import { Link } from 'react-router-dom';

export default ({data: { first_name, last_name, id }}) => (
    <h4 className="author_name">{first_name} {last_name}</h4>
);