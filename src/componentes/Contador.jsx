import React from 'react'
import { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <br />
            <hr />
            Contador: {count}
            <button className='btn-count' onClick={() => setCount(count - 1)}>-</button>
            <button className='btn-count' onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Contador
