import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const ComponentLoader = () => {
    return (
        <Dimmer active inverted>
            <Loader content="Loading" />
        </Dimmer>
    );
}

export default ComponentLoader;
