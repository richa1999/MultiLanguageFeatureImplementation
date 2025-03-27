import React from 'react'
import { Lang } from '../utils/langConstants'

function About({lang}) {
    const data = Lang[lang]
    const {title, desc, title2, desc2, title3, desc3, title4, desc4} = data
  return (
    <div>
        <h1></h1>
        <div>
            <h2>{title}</h2>
            <div>{desc}</div>
        </div>
        <div>
            <h2>{title2}</h2>
            <div>{desc2}</div>
        </div>
        <div>
            <h2>{title3}</h2>
            <div>{desc3}</div>
        </div>
        <div>
            <h2>{title4}</h2>
            <div>{desc4}</div>
        </div>
    </div>
  )
}

export default About