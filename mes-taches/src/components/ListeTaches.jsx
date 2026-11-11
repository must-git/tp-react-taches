import Tache from './Tache';
function ListeTaches({ taches }) {
  return (
    <ul className="liste-taches">
      {taches.length === 0 && <p className="vide">Aucune tâche à afficher.</p>}
      {taches.length > 0 && taches.map((tache) => (
        <Tache key={tache.id} titre={tache.titre} terminee={tache.terminee} />
      ))}
    </ul>
  );
}

export default ListeTaches;
