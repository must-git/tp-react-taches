import Tache from './Tache';
function ListeTaches({ taches, onBasculer, onSupprimer }) {
  return (
    <ul className="liste-taches">
      {taches.length === 0 && <p className="vide">Aucune tâche à afficher.</p>}
      {taches.length > 0 && taches.map((tache) => (
        <Tache key={tache.id} titre={tache.titre} id={tache.id} terminee={tache.terminee} onBasculer={onBasculer} onSupprimer={onSupprimer} />
      ))}
    </ul>
  );
}

export default ListeTaches;
