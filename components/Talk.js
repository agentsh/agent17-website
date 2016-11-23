import React from 'react';
import Headline from './Headline';

export default ({speaker}) => (
    <div className="row" style={{
        paddingBottom: 20,
        paddingTop: 20,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.8)'
    }}>
        <div className="col-sm-2"><img src={speaker.imageTalk} className="img-responsive" alt={speaker.name}/></div>
        <div className="col-sm-10">
            <Headline type="h2" size="small" content={speaker.title} style={{
                fontSize: 23,
                textAlign: 'left',
                paddingRight: 0
            }}/>
            <p style={{paddingLeft: 30}}>{speaker.name} - {speaker.company}</p>

        </div>
        <hr/>
    </div>
);
