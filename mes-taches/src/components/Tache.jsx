function Tache({ id, titre, terminee, onBasculer, onSupprimer, onModifierTitre }) {
  function modiferTitre(id) {
    const nouveauTitre = prompt("Modifier le titre de la tâche :", titre);
    if (nouveauTitre.trim() !== "") {
      onModifierTitre(id, nouveauTitre);
    }
  }
  return (
    <li className={`tache ${terminee ? 'terminee' : ''}`}>
      <span className="titre" onDoubleClick={() => modiferTitre(id)}>{titre}</span>
      <input type="checkbox" checked={terminee} onChange={() => onBasculer(id)} />
      <button className="danger" onClick={() => onSupprimer(id)}>Supprimer</button>
    </li>
  );
}

export default Tache;