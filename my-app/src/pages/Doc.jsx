import React from 'react'
import { useSelector } from 'react-redux';

const Doc = () => {
    const data = useSelector(state => state);
  return (
    <div>{
            <pre>
                <code>
                    {JSON.stringify(data?.data?.data?.items,null, 2)}
                </code>
            </pre>
        }
    </div>
  )
}

export default Doc