import styled from "styled-components"

export default function Cardapio_card (props) {
    // eslint-disable-next-line react/prop-types
    let imgUrl = props.imgUrl
    // eslint-disable-next-line react/prop-types
    let title = props.title
    // eslint-disable-next-line react/prop-types
    let price = props.price

    const Container__cardapio_card = styled.div `
        position: relative;
        width: 80%;
        max-width: 320px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 80px 5px;
    `

    const Cardapio_card_description = styled.div `
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        background-color: #FEF6F4;
        z-index: 0;
        border-radius: 15px;
        text-align: center;
    `
    const Title = styled.h3 `
        margin: 20px 0 10px 0;
    `
    const Preco = styled.span `
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
    `
    const Container_img = styled.figure `
        width: 100%;
        display: flex;
        justify-content: center;
    `
    const Image = styled.img `
        position: absolute;
        margin-top: -60px;
        z-index: 2;
    `
    const Botao = styled.button `
        position: absolute;
        bottom: 0;
        margin-bottom: -30px;
        background-color: #FFA200;
        border: none;
        border-radius: 25px;
        padding: 10px 26px;
        z-index: 2;
        font-size: 14px;
        font-weight: 600;
    `

    return (
        <Container__cardapio_card>
            <Container_img>
                <Image src={imgUrl} alt="Pizza La Cuma" />
            </Container_img>
            <Cardapio_card_description className="cardapio-card-description">
                <Title>{title}</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Preco>R$ {price}</Preco>
            </Cardapio_card_description>
            
            <Botao>Comprar agora</Botao>
        </Container__cardapio_card>
    )
}