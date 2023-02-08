// ## Exercice 1

//  - Créer un nouveau projet React et le nettoyer
//  - Dans l'App.JS créer une variable first_name
//  - Si la valeur de la variable est égale à votre prénom, afficher un message de bienvenue avec la valeur de first_name.
//  - Si la valeur n'est pas égale à votre prénom, afficher un message qui dit que vous n'êtes pas la bonne personne.

function App() {
  let first_name = 'Bachir';
  let affichage = first_name === 'Bachir' ? <div>{`Bienvenue ${first_name}`}</div> : <div>{"Vous n'êtes pas la bonne personne"}</div>;
  return (
    <div>
       {affichage}
    </div>
  );
}

export default App;
