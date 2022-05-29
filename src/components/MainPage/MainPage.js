import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dropAll } from '../../redux/actions'

function MainPage(props) {

    const Header = styled.div`
        background-color: #101010;
        height: 70px;
        padding: 10px 61px 0px 61px;
        width: 100%;
    `

    const TitleContainer = styled(Link)`
        text-decoration: none;
        font-family: 'Alegreya Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 60px;
        text-transform: uppercase;
        color: #fffFFF;
        width: max-content;
        height: max-content;
    `

    return (
        <>
            <Header>
                <TitleContainer onClick={() => {
                    props.dropAll()
                }} to="/">header</TitleContainer>
            </Header>
        </>
    )
}

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = {
    dropAll
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);