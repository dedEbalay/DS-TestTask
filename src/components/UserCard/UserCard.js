import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setCurrentUser, setLoading } from '../../redux/actions';

function UserCard(props) {

    const CardContainer = styled.div`
        min-width: 239px;
        height: 143px;
        border: 1px solid #000000;
        font-family: 'Open Sans';
        padding: 14px 28px 15px 17px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 13px;
    `

    const CardTitle = styled.div`
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 23px;
        text-transform: capitalize;
        color: #000000;
        margin-bottom: 4px;
    `

    const CardButton = styled(Link)`
        width: 148px;
        height: 35px;
        left: 77.09px;
        top: 689px;
        background: #101010;
        border: 1px solid #0D1E4B;
        font-weight: 600;
        font-size: 11px;
        line-height: 15px;
        text-transform: capitalize;
        color: #FFFFFF;
        text-decoration: none;
        padding: 10px 19px;
    `

    const linkID = `/users/${props.id}`

    return (
        <CardContainer>
            <CardTitle>{props.name}</CardTitle>
            <CardButton to={linkID} onClick={() => {
                props.setLoading()
            }} >Смотреть профиль</CardButton>
        </CardContainer>
    )
}

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = {
    // setCurrentUser,
    setLoading
}



export default connect(mapStateToProps, mapDispatchToProps)(UserCard);