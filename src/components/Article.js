import React from "react";

const Article = ({title, date, preview, minutes}) => {
  let time = ""
  if (minutes < 30) {
    for(let i = 0; i < ((minutes)/5); i += 1) {
      time = time + "☕️"
    }
  } else {
    for(let i = 0; i < ((minutes)/10); i += 1) {
      time = time + "🍱"
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}・{time} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;