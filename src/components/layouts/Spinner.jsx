import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";
import './loader.css';

const Spinner = () => {
    return (
        <div className="Loader">
             <Dimmer active inverted size="massive">
                <Loader inverted>Loading</Loader>
             </Dimmer>
          </div>
    )
}

export default Spinner
