import React from 'react'
import "../css/SuggFilter.css"
import Canvas from './Canvas';
import suggested_filter from './FilterList';

function SuggFilter({fileName}) {
    
    function added_filter(values){
        return {filter:`${values}`,display:"none"}
    }
    return (
        <div className="sug-grid">
            <h2>
                Have a loot at some of that suggestions here ...
            </h2>
            <div className="underline-small"></div>
            <div className="image-grid">
            {
                suggested_filter.map((ele)=>{ return(
                    <div key={ele.name}>
                        <p className="filter-name"> {ele.name}</p>
                        <img 
                            src={fileName} 
                            style = {added_filter(ele.value)} 
                            alt={ele.name}
                        />
                        <Canvas 
                            key={ele.name} 
                            fileName={fileName} 
                            values = {ele.value} 
                            name={ele.name}
                        />
                    </div>)
                })
            }
           </div>
        </div>
    )
}

export default SuggFilter
