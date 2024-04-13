import React, { useEffect } from 'react'
import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className='btn-count' onClick={() => setCount(count - 1)}>-</button>
            <button className='btn-count' onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
export default Counter
