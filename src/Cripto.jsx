import "./Cripto.css"
const Cripto = ({name, priceUsd,symbol,rank,changePercent24Hr}) => {
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p>
                    <span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(2)}
                    <br />
                    <span className="label">Simbolo: </span>{symbol}
                    <br />
                    <span className="label">Rank: </span>{rank}
                    <br />
                    <span className="label">Variacion 24hr: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(2)}%
                    </span>

                </p>
            </div>
        </div>
    )
}

export default Cripto

//Nombre:{name}Preco:{priceUsd}Simbolo:{symbol}