import React from 'react'

function SortOptions() {

const link_article_id = "/articles?sort_by=article_id"
const link_votes = "/articles?sort_by=votes";
const link_title = "/articles?sort_by=title";
const link_author= "/articles?sort_by=author";
// console.log(link_votes);


  return (
    <div> SortOptions <p>
        <a href={link_article_id}><button> Article ID</button></a> </p>
        <p><a href={link_author}><button> Author</button></a></p>
        <p><a href={link_title}><button> Title</button></a></p>
        <p><a href={link_votes}><button> Votes</button></a></p>
        
    </div>    
  )
}

export default SortOptions