import styled from 'styled-components'

function CommentCard(props) {

    const CommentContainer = styled.div`
        width: 100%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        border: 1px solid #000000;
        padding: 10px 20px;
        margin-bottom: 15px;
    `

    const CommentatorName = styled.div`
        font-family: Open Sans;
        font-size: 17px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        margin-right: 40px;
        margin-bottom: 30px;
    `

    const CommentatorEmail = styled.div`
        font-family: Open Sans;
        font-size: 17px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        color: #00000069;
    `

    const CommentText = styled.div`
        font-family: Open Sans;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        width: 100%;
    `

    return (
        <CommentContainer>
            <CommentatorName>Имя:{props.name}</CommentatorName>
            <CommentatorEmail>Почта:{props.email}</CommentatorEmail>
            <CommentText>{props.body}</CommentText>
        </CommentContainer>
    )
}

export default CommentCard;