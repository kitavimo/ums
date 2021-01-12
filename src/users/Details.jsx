import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <div>
            <h1>User Management</h1>
            <p>
                See below table for user/employee details<br/>
                {/* <strong>Email: </strong> {user.email} */}
            </p>
            
            <p><Link to={`${path}/update`}>Add/Update Details</Link></p>

           
        </div>
    
    );

}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

export { Details };
// export { Table };

export { GuestGreeting };

