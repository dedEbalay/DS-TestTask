import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PostCardPreview(props) {

    const [text, setText] = useState(''),
          pushLink = `/users/${props.userId}/posts/${props.id}`

    useEffect(() => {
        const newText = props.body.slice(0, 60)
        setText(newText+'...')
    }, [])

    const PostCardPreviewContainer = styled.div`
        padding: 14px 35px 17px 35px;
        border: 1px solid #000000;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
    `

    const PostCardPreviewTitle = styled(Link)`
        text-decoration: none;
        color: #000000;
        font-family: Open Sans;
        font-size: 17px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 4px;
    `

    const PostCardPreviewText = styled.div`
        font-family: Open Sans;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(0, 0, 0, 0.41);
        width: 100%;
    `

    return (
        <PostCardPreviewContainer>
            <PostCardPreviewTitle to={pushLink} onClick={() => {
                
            }}>{props.title}</PostCardPreviewTitle>
            <PostCardPreviewText>{text}</PostCardPreviewText>
        </PostCardPreviewContainer>
    )
}

export default PostCardPreview;