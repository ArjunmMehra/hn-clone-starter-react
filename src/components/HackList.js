import React from 'react'
import Hacks from './Hacks';

const HackList = ({data}) =>{

    return (
        <div>
           { data.map(item=>{
                return (<Hacks key={item.objectID} hackData={item}/>)
            })}
        </div>
    )
}

export default HackList