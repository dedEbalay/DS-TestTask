import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PostCardPreview from '../PostCardPreview/PostCardPreview';
import { setUsers, getPosts, getUser, setCurrentUser, setLoading } from '../../redux/actions'
 
function UserProfilePage(props) {

    const location = useLocation(),
          userId = location.pathname.replace(/[^0-9]/g,""),
          pushLink = `/users/${userId}/posts`

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => props.setCurrentUser(json, userId))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(json => props.getPosts(json))
    }, [])

    const InfoContainer = styled.div`
        margin-top: 36px;
        border: 1px solid #000000;
        padding-bottom: 25px;
    `

    const InfoTitleContainer = styled.div`
        display: grid;
        grid-template-columns: 53px 1fr 63px;
        border-bottom: 1px solid #000000;
        height: 64px;
        font-family: 'Alegreya Sans';
        font-weight: 500;
        font-size: 35px;
        line-height: 40px;
    `

    const InfoTitle = styled.div`
        grid-column-start: 2;
        display: flex;
        align-items: center;
        padding-left: 18px;
        border-left: 1px solid #000000;
        border-right: 1px solid #000000;
        height: 100%;
    `

    const ContactInfoContainer = styled.div`
        display: grid;
        grid-template-columns: 53px repeat(5, 1fr) 63px;
        height: 44px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 17px;
        border-bottom: 1px solid #000;
    `

    const InfoName = styled.div`
        display: flex;
        align-items: center;
        border-left: 1px solid #000000;
        padding-left: 18px;
        grid-column-start: 2;
    `

    const InfoEmail = styled(InfoName)`
        grid-column-start: 3;
    `

    const InfoPhone = styled(InfoName)`
        grid-column-start: 4;
    `

    const InfoSite = styled(InfoName)`
        grid-column-start: 5;
    `

    const InfoCompany = styled(InfoName)`
        grid-column-start: 6;
        border-right: 1px solid #000000;
    `

    const PostsContainer = styled.div`
        border-bottom: 1px solid #000000;
        padding: 16px 62px 33px 53px;
    `

    const PostsTitle = styled(Link)`
        text-decoration: none;
        color: #000000;
        font-family: Alegreya Sans;
        font-size: 35px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
    `

    const PostsWrapper = styled.div`
        display: grid;
        column-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
    `

    if (props.loading) {
        return (
            <>Загрузка</>
        )
    } 

    return (
        <>
            <InfoContainer>
            <InfoTitleContainer>
                <InfoTitle>{props.currentUser.username}</InfoTitle>
            </InfoTitleContainer>
            <ContactInfoContainer>
                <InfoName>{props.currentUser.name}</InfoName>
                <InfoEmail>{props.currentUser.email}</InfoEmail>
                <InfoPhone>{props.currentUser.phone}</InfoPhone>
                <InfoSite>{props.currentUser.website}</InfoSite>
                <InfoCompany>{props.currentUser.company.bs}</InfoCompany>
            </ContactInfoContainer>
            </InfoContainer>
            <PostsContainer>
                <PostsTitle to={pushLink} >Посты(посмотреть все)</PostsTitle>
                <PostsWrapper>
                    {
                    (props.userPosts.slice(0,3).map(item => {
                        return (
                            <PostCardPreview key={item.id} {...item} />
                        )
                    }))
                    }
                </PostsWrapper>
            </PostsContainer>
        </>
    )
}

const mapStateToProps = (store) => {
    return {
        currentUser: store.currentUser,
        userPosts: store.userPosts,
        loading: store.loadingState,
        userLoading: store.userLoading,
        users: store.users
    }
}

const mapDispatchToProps = {
    getPosts,
    getUser,
    setCurrentUser,
    setLoading,
    setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);