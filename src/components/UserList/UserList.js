import styled from 'styled-components'
import { connect } from "react-redux";
import { setUsers } from "../../redux/actions";
import UserCard from "../UserCard/UserCard";
import { useEffect } from 'react';

function UserList(props) {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => props.setUsers(json))
    }, [])

    const ListContainer = styled.div`
        width: 89%;
        margin: 87px auto;
        display: flex;
        max-width: 100%;
        overflow: auto;
        padding-bottom: 20px;
        &::-webkit-scrollbar {
            background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #000000;
        }
    `
    const LoadingMessage = styled.div`
        color: #000000;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 23px;
        text-transform: capitalize;
    `

    if (props.loading) {
        return (
            <LoadingMessage>Загрузка</LoadingMessage>
        )
    }

    return (
        <ListContainer >
            {(props.users.map(item => {
            return (
                <UserCard key={item.id}  {...item} />  
            )
        }))}
        </ListContainer>
    )
}

const mapStateToProps = (store) => {
    return {
        loading: store.loadingState,
        users: store.users
    }
}

const mapDispatchToProps = {
    setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);