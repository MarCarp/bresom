import '../assets/styles/common.css';
import '../assets/styles/play-desktop.css';
import '../assets/styles/play.css';

export default function Play() {
    return (
        <div id="modal-wrap" className="modal-bg">
        <aside id="dmg-control" className="modal">
            <div className="input-container">
                <div className="input-element">
                    <label htmlFor="esp-dmg-counter">Esprit</label>
                    <button className="dmg-roll" onClick="damageUpdate('esp','up')"></button>
                    <input id="esp-dmg-counter" type="number" value="0" min="0" max="12" />
                    <button className="dmg-roll roll-down" onClick="damageUpdate('esp','down')"></button>
                </div>
                <div className="input-element">
                    <label htmlFor="phy-dmg-counter">Corps</label>
                    <button className="dmg-roll" onClick="damageUpdate('phy','up')"></button>
                    <input id="phy-dmg-counter" type="number" value="0" min="0" max="12" />
                    <button className="dmg-roll roll-down" onClick="damageUpdate('phy','down')"></button>
                </div>
            </div>
            <div id="dmg-ctas" className="input-container">
                <button id="modal-close" className="btn-play">Annuler</button>
                <button id="dmg-apply" className="btn-play">Appliquer</button>
            </div>
        </aside>
    </div>
    )
}