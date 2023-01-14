import React, {useState, useEffect} from "react"

function TypeAnimation({message}){
    const [text, setText] = useState("")
    const [fullText] = useState(message)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 40)
        }
      }, [fullText, index, text])
      return (<p>{text}</p>)
}

export default TypeAnimation;