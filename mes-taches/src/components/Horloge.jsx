import { useEffect, useState } from 'react'

function Horloge() {
  const [maintenant, setMaintenant] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMaintenant(new Date())
    }, 1000)

    return () => {
      console.log("Nettoyage de l'horloge : intervalle supprimé")
      clearInterval(intervalId)
    }

  }, [])

  return <p className="horloge">{maintenant.toLocaleTimeString('fr-FR')}</p>
}

export default Horloge