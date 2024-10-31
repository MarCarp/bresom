import '../assets/styles/common.css';
import '../assets/styles/perso.css'

export default function Persos() {
    return(
        <div className="main-wrap">
        <h1 className="title">Personnages</h1>
        <ul id="persos" className="perso-container">
            <li className="perso-element">Michel Fils de Jacques</li>
            <li className="perso-element">Halmal</li>
            <li className="perso-element">Benoît Faurisson</li>
            <li className="perso-element">Xavière Dupont de Liges-pas-loin-de-Gonnesse</li>
            <li className="perso-element">Billy Mitchell</li>
            <li className="perso-element">Tom Bombelabille</li>
            <li className="perso-element">Virgile Lefira</li>
            <li className="perso-element">Adèle Extraplusquepopoulos</li>
        </ul>
        <button className="btn-create">Nouveau Perso</button>
    </div>
    )
}