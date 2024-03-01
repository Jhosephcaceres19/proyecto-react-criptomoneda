import "./Cripto.css"
const Cripto = ({name, priceUsd,symbol,rank}) => {
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p>
                    <span className="label">Precio: </span>{priceUsd}
                    <br />
                    <span className="label">Simbolo: </span>{symbol}
                    <br />
                    <span className="label">Rank: </span>{rank}
                </p>
            </div>
        </div>
    )
}

export default Cripto

//Nombre:{name}Preco:{priceUsd}Simbolo:{symbol}