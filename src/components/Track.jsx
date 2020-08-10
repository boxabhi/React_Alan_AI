import React from 'react';

function Track(props) {
   // console.log(props);
    return (
        <div className="col-lg-4">


        <div className="shadow-sm  p-4">

        <h2 className="">{props.tracks.track}</h2>

        <button className="btn btn-success">View lyrics</button>
        </div>


            
        </div>
    );
}

export default Track;