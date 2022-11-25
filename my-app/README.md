# Exercice React Redux

On va déplacer le state de Todos dans le store Redux.

Dans `src/store/actions.js` prévoir 2 nouvelles actions :

- pour mettre à jour la valeur saisie dans le champs (ex: `setNewTodo`)
- pour ajouter une todos au tableau (ex: `addTodo`)

Dans `src/store/reducer.js`

- modifier `initialState` pour inclure les valeurs liées à Todos :

```js
const initialState = {
  user: {
    name: "Romain",
  },
  counter: {
    count: 0,
    step: 1,
  },
  todos: {
    items: [
    { id: Math.random(), title: 'ABC', completed: false },
    { id: Math.random(), title: 'DEF', completed: true },
  ],
    newTodo: 'XYZ'
  }
};
```

- Créer un nouveau reducer `todosReducer` et l'enregistrer en fin de fichier dans la variable `reducer` (associé à la clé `todos` du state).

- Dans ce reducer traiter les actions créés précédemment.

- Tester avec l'extension Redux DevTools que les actions suivantes fonctionnent :

```js
{
  type: 'SET_NEW_TODO', // ou autre string définie dans le fichier actions.js
  payload: 'Acheter du pain'
}

{
  type: 'ADD_TODO', // ou autre string définie dans le fichier actions.js
  payload: {
    id: 0.345634653464,
    title: 'Acheter du pain',
    completed: false,
  }
}
```

- Ecrire un ou plusieurs selecteur dans `src/store/selector.js` pour retrouver les valeurs du state Redux.

- Dans le composant `Todos.js` remplacer les `useState` par `useSelector`
- Dans le composant `Todos.js` remplacer `setTodos` et `setNewTodo` par des appels à `dispatch` (importé avec `useDispatch`)

## Exercice Router

Remplacer le code du composant User par :

```jsx
<div className="User">
  <nav>
    <Link to="add">New</Link>
    <Link to="1">Toto</Link>
    <Link to="2">Titi</Link>
    <Link to="3">Tata</Link>
  </nav>
  <Outlet />
</div>
```

Pensez à importer `Link` et `Outlet`

Créer un nouveau composant `UserDetails`

Configurer ensuite le router pour que :

- sur `/users` le composant `User` s'affiche seul
- sur `/users/new` le composant `User` s'affiche ainsi que `UserForm` dans sont `Outlet`
- sur `/users/1`, `/users/2`, `/users/3` le composant `User` s'affiche ainsi que `UserDetails` dans sont `Outlet`, pour créer des URLs avec des paramètres dans le router ont peut déclarer le path `:nomDuParam`, ex: `path: ':userId'`
