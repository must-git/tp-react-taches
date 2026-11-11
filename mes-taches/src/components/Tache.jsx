function Tache({ titre, terminee }) {
  return (
    <li className={`tache ${terminee ? 'terminee' : ''}`}>
      <span className="titre">{titre}</span>
      <span className="statut">{terminee ? '✅' : '⬜'}</span>
    </li>
  );
}

export default Tache;