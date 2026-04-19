import React from 'react'

const App = () => {
  let arr = ['pappu','chhotu','bantu','sullu','tillu','lillu']
  return (
    <div id="main">
        <ol key="relativelist">
          {
            arr.map((value,index)=>{
              return <li key={`relativeListItem${index+1}`}>{value}</li>
            })
          }
        </ol>
               {/* Do not remove the main div */}
    </div>
  )
}

export default App
