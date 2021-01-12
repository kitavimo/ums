import React from 'react';
import { Link } from 'react-router-dom';

function Overview({ match }) {
    const { path } = match;

    return (
        <div>
            <h1>Admin</h1>
            <p>This section can only be accessed by administrators.</p>
            {/* <p><Link to={`${path}/users`}>Manage Users</Link></p> */}
            {/* <textarea>
  Hello there, this is some text in a text area
</textarea> */}
        </div>
    );
}

export { Overview };