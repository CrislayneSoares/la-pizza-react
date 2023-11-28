import styled from "styled-components";
import img from '../../assets/bg-la-pizza.png'

const Container__cover = styled.div `
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;

    @media screen and (min-width:900px) {
        Container__cover {
            height: 300px;
        }
    }
    @media screen and (min-width:900px) {
        Container__cover {
            height: 400px;
        }
    }
`
const Vermelho = styled.span `
    color: #CF3031;
`
const Verde = styled.span `
    color: #5C913B;
`
const Amarelo = styled.span `
    color: #FFA200;
`

export default function Cover () {
    return (
        <Container__cover>
            <h1>La P<Amarelo>i</Amarelo><Vermelho>z</Vermelho><Verde>z</Verde>a</h1>
        </Container__cover>
    )
}