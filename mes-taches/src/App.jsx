import Entete from "./components/Entete.jsx";
import ListeTaches from "./components/ListeTaches.jsx";
import Pied from "./components/Pied.jsx";
import Carte from "./components/Carte.jsx";
import Compteur from "./components/Compteur.jsx";
import FormulaireAjout from "./components/FormulaireAjout.jsx";
import Filtres from "./components/Filtres.jsx";
import Statistiques from "./components/Statistiques.jsx";
import Horloge from "./components/Horloge.jsx";
import { useState, useEffect } from "react";

function App() {
  const [taches, setTaches] = useState(
    localStorage.getItem("taches")
      ? JSON.parse(localStorage.getItem("taches"))
      : [],
  );
  const [chargement, setChargement] = useState(
    () => localStorage.getItem("taches") === null,
  );
  const [erreur, setErreur] = useState(null);
  const [filtre, setFiltre] = useState("toutes");

  const tachesRestantes = taches.filter((task) => !task.terminee).length;

  useEffect(() => {
    document.title = `(${tachesRestantes}) Mes tâches`;
  }, [tachesRestantes]);

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  useEffect(() => {

    if (!chargement) return;
    
    let annule = false;

    fetch("/taches.json")
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
        return reponse.json();
      })
      .then((donnees) => {
        if (!annule) setTaches(donnees);
      })
      .catch((err) => {
        if (!annule) setErreur(err.message);
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });

    return () => {
      annule = true;
    };
  }, []);

  const tachesVisibles =
    filtre === "toutes"
      ? taches
      : taches.filter((tache) =>
          filtre === "terminees" ? tache.terminee : !tache.terminee,
        );

  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    );
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id));
  }

  function ajouterTache(titre) {
    const nouvelleTache = {
      id: Date.now(),
      titre,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  }

  return (
    <div className="app">
      <Entete />
      <Carte titre="Ma liste">
        <Filtres filtre={filtre} onChanger={setFiltre} />
        {chargement ? (
          <p className="vide">Chargement des tâches…</p>
        ) : erreur ? (
          <p className="erreur">Erreur : {erreur}</p>
        ) : tachesVisibles.length === 0 ? (
          <p className="vide">Aucune tâche à afficher.</p>
        ) : null}
        <ListeTaches
          taches={tachesVisibles}
          onBasculer={basculerTache}
          onSupprimer={supprimerTache}
        />
      </Carte>
      <Carte titre="Compteur">
        <Compteur />
      </Carte>
      <Carte titre="Ajouter une tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>
      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>
      <Carte titre="Heure actuelle">
        <Horloge />
      </Carte>
      <Pied auteur="Mustapha ACHAHROUR" />
    </div>
  );
}

export default App;
