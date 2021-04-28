import React from 'react'

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png"

const QuizThumbnail = () => {
    return (
        <div>
            <img src={`${QuizImg}`} alt="Quiz Thumbnail"/>
        </div>
    )
}

export default QuizThumbnail
