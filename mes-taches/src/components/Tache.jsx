function Tache({ id, titre, terminee, onBasculer, onSupprimer }) {
  return (
    <li className={`tache ${terminee ? 'terminee' : ''}`}>
      <span className="titre">{titre}</span>
      <input type="checkbox" checked={terminee} onChange={() => onBasculer(id)} />
      <button className="danger" onClick={() => onSupprimer(id)}>Supprimer</button>
    </li>
  );
}

export default Tache;