import React from 'react';
import Moment from 'react-moment';

const Peep = ({peep, onRemovePeep=f=>f }) =>
    <div className="card card-body mb-3" key={peep.id}>
        <h3>{peep.body}</h3><p>@{peep.user.handle}</p>
       <Moment format="YYYY-MM-DD - HH:mm">{peep.created_at}</Moment>
       <button onClick={() => onRemovePeep(peep.id)}>Erase</button>

   <hr />
    </div>
export default Peep;
