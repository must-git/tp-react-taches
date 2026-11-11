
function Filtres({ filtre, onChanger }) {
    return (
        <div className="filtres">
            <button className={filtre === 'toutes' ? 'actif' : ''} onClick={() => onChanger('toutes')}>
                Toutes
            </button>
            <button className={filtre === 'terminees' ? 'actif' : ''} onClick={() => onChanger('terminees')}>
                Terminées
            </button>
            <button className={filtre === 'en-cours' ? 'actif' : ''} onClick={() => onChanger('en-cours')}>
                En cours
            </button>
        </div>
    );
}

export default Filtres;