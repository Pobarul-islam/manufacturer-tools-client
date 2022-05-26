import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

            <h1>Hello world</h1>

        </div>
    );
};

export default Tools;