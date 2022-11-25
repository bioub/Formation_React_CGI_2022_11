import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userFetchById, userFetchByIdSuccess } from "../store/actions";
import { currentUserSelector, userByIdSelector } from "../store/selectors";
import { fetchUserById } from "./api";

function UserDetails() {
  const { userId } = useParams();

  /* Exercice
  En vous inspirant de User
  Créer 2 actions userFetchById et userFetchByIdSuccess
  qui mettront à jour la clé user.currentUser du state avec les données du serveur
  Terminer la fonction fetchUserById dans api.js
  et l'appeler ainsi que le dispatch des actions dans un useEffect
  */

  // const user = useSelector(userByIdSelector(userId));
  const user = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetchById());
    fetchUserById(userId).then((res) => {
      dispatch(userFetchByIdSuccess(res.data));
    });
  }, [dispatch, userId]);

  return (
    <div className="UserDetails">
      <div>Username: {user?.username}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
}

export default UserDetails;
