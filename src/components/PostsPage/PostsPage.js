import { connect } from 'react-redux';
import styled from 'styled-components'
import PostCardPreview from '../PostCardPreview/PostCardPreview';
import { setCurrentUser, getPosts } from '../../redux/actions'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PostsPage(props) {

    const location = useLocation(),
          userId = location.pathname.replace(/[^0-9]/g,"");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(json => props.getPosts(json))
    }, [])

    const PostsContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
    `

    const PostsTitle = styled.div`
        font-family: Alegreya Sans;
        font-size: 35px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        color: #000000;
    `

    const PostCardContainer = styled.div`

    `

    const PostCard = styled(PostCardPreview)`

    `

    return (
        <PostsContainer>
            <PostsTitle>Все посты пользователя</PostsTitle>
            <PostCardContainer>
                {(props.userPosts.map(item => {
                    return (
                        <PostCard key={item.id} {...item}/>
                    )
                }))}
            </PostCardContainer>
        </PostsContainer>
    )
}

const mapStateToProps = (store) => {
    return {
        userPosts: store.userPosts
    }
}

const mapDispatchToProps = {
    setCurrentUser,
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);