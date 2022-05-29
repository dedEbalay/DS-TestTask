import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { setCurrentUser, getPosts, getCurrentPost, setLoading, getComments, pushPostId } from '../../redux/actions'
import CommentCard from '../CommentsCard/CommentsCard'

function CurrentPostPage(props) {

    const location = useLocation()

    const postId = location.pathname.slice(location.pathname.indexOf('posts')+6)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(json => props.getCurrentPost(json))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(json => props.getComments(json))
    }, [])

    const PostContainer = styled.div`
        padding-top: 50px;
        width: 90%;
        margin: auto;
        margin-bottom: 70px;
    `
    const PostTitle = styled.div`
        font-family: Alegreya Sans;
        font-size: 35px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 50px;
    `

    const PostText = styled.div`
        color: #00000069;
        width: 100%;
        font-family: Open Sans;
        font-size: 17px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
    `
    const CommentsSectionContainer = styled.div`
        font-family: Alegreya Sans;
        font-size: 35px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        width: 90%;
        margin: auto;
        padding-bottom: 70px;
    `

    const CommentsSectionTitle = styled.div`
    
    `

    const AddCommentButton = styled(Link)`
        display: block;
        width: 100%;
        text-decoration: none;
        background: #101010;
        font-family: Open Sans;
        font-size: 11px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        height: 44px;
        text-align: center;
        padding-top: 14.5px;
    `

    if (props.loading) {
        return (
            <>Загрузка</>
        )
    }

    return (
        <>
            <PostContainer>
                <PostTitle>{props.currentPost.title}</PostTitle>
                <PostText>{props.currentPost.body}</PostText>
            </PostContainer>
            <CommentsSectionContainer>
                <CommentsSectionTitle>Комментарии</CommentsSectionTitle>
                {(props.comments.map(item => {
                    return (
                        <CommentCard key={item.id} {...item} />
                    )
                }))}
                <AddCommentButton onClick={e => {
                    props.pushPostId(postId)
                }}to='/addcomment'>Добавить комментарий</AddCommentButton>
            </CommentsSectionContainer>
        </>
    )

}

const mapStateToProps = (store) => {
    return {
        currentPost: store.currentPost,
        loading: store.loadingState,
        comments: store.comments
    }
}

const mapDispatchToProps = {
    setCurrentUser,
    getPosts,
    getCurrentPost,
    setLoading,
    getComments,
    pushPostId
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPostPage);