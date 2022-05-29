import React, { useEffect, useState } from 'react';
import ProductTools from './ProductTools';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://salty-oasis-53034.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => { console.log(data); setTools(data) })

    }, [])

    return (
        <div>
            <h2>Tools: {tools.length}</h2>


            <div className='flex grid grid-cols-3 mt-20 gap-10'>
                {
                    tools.slice(0, 5).map(tool => <ProductTools
                        key={tool.id}
                        tool={tool}
                    ></ProductTools>)
                }
            </div>

        </div>
    );
};

export default Tools;