import styled from "styled-components"

const Container__banner = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FCFCFC;

    @media screen and (min-width:900px) {
        flex-direction: row;
        padding: 0 20px;

        figure {
            display: block;
        }
    }
    
    @media screen and (min-width:1200px) {
        padding: 0 50px;
    }
`
const Container__sobre = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:900px) {
        margin-left: 30px;
        align-items: flex-start;
    }
`
const Alinhar_p = styled.p `
    width:80%;
    text-align: center;

    @media screen and (min-width:900px) {
        text-align: justify;
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
const Butao = styled.button `
    background-color: #FFA200;
    border: none;
    border-radius: 25px;
    padding: 10px 26px;
    z-index: 2;
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0;
`
const Container__image = styled.figure `
    display: none;
`

export default function Banner () {
    return (
        <Container__banner>
            <Container__image>
                <img src="\src\assets\restaurant.png" alt="restaurant" />
            </Container__image>
            <Container__sobre>
                <h2>Sobre a La P<Amarelo>i</Amarelo><Vermelho>z</Vermelho><Verde>z</Verde>a</h2>
                <Alinhar_p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </Alinhar_p>
                <Butao>Ler mais</Butao>
            </Container__sobre>
        </Container__banner>
    )
}