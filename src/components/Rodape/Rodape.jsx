import style from './Rodape.module.css'

const Rodape = () => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    console.log("Current Year:", anoAtual);
    return (
        <div className={style.Rodape}>
            Maytê | {anoAtual}
        </div>
    )
}

export default Rodape
