import React from 'react'
import './cat.scss'
const Cat = (props) => {
    const {url} = props
    return(
        <div className='cat-img'>
           <span>
               <img alt='cat' src={url} />
           </span>
        </div>
    )
}

export default React.memo(Cat);