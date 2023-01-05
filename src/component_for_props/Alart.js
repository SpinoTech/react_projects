import React from 'react'

const cap=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
}

export default function Alart(props) {
    return (
        props.alart && <div>
            <div className={`alert alert-${props.alart.type} alert-dismissible fade show`} role="alert">
                <strong>{cap(props.alart.type)}</strong> ::{props.alart.msg}
            </div>
        </div>
    )
}
