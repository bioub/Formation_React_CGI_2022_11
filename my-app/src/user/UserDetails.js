import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();

  /* Exercice
  En vous inspirant de User
  Créer 2 actions userFetchById et userFetchByIdSuccess
  qui mettront à jour la clé user.currentUser du state avec les données du serveur
  Terminer la fonction fetchUserById dans api.js
  et l'appeler ainsi que le dispatch des actions dans un useEffect
  */

  return (
    <div className="UserDetails">
      UserDetails Component
    </div>
  );
}

export default UserDetails;
