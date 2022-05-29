import { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'
import { dropAll } from '../../redux/actions'


const NameInput = styled.input`
        margin-bottom: 20px;
        padding-left: 20px;
        outline: none;
    `

const EmailInput = styled(NameInput)`

`

const CommentInput = styled(NameInput)`

`

const CommentForm = styled.form`
padding-top: 50px;
margin: auto;
width: 80%;
display: flex;
flex-direction: column;
`

const CommentFormTitle = styled.div`
font-family: Alegreya Sans;
font-size: 35px;
font-weight: 500;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
text-align: center;
`   

const SubmitButton = styled.button`

`

function AddCommentPage(props) {

    const navigate = useNavigate();

    const [name, setName] = useState(''),
          [email, setEmail] = useState(''),
          [comment, setComment] = useState('');

    //Валидация будет если надо

    function submitComment(postId, name, email, comment) {

        const postBody = {
            postId: postId,
            name: name,
            email: email,
            comment: comment,
            id: uuidv4()
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`, {
            method: 'POST',
            body: JSON.stringify(postBody)
        }).then(res => {
            if (res.status === 201) {
                navigate(`/`)
            } else {
                navigate(`/error${res.status}`)
            }
        })
    }


    return (
        <CommentForm  
            onSubmit={(e) => {
                e.preventDefault();
                submitComment(props.postId, name, email, comment);
                props.dropAll()
            }}
        >
            <CommentFormTitle>Отправка комментария</CommentFormTitle>
            <NameInput value={name} onChange={(e) => {
                setName(e.target.value)
            }} placeholder='Введите ваше имя'/>
            <EmailInput value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder='Введите ваш email' />
            <CommentInput value={comment} onChange={(e) => {
                setComment(e.target.value)
            }} placeholder='Введите комментарий'/>
            <SubmitButton>Отправить</SubmitButton>
        </CommentForm>
    )
}

const mapStateToProps = (store) => {
    return {
        postId: store.postId
    }
}

const mapDispatchToProps = {
    dropAll
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentPage);