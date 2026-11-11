function Pied() {
  const ANNEE = new Date().getFullYear();
  return (
    <footer className="pied">
      <p>TP React – {ANNEE}</p>
    </footer>
  );
}

export default Pied;
