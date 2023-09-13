import React from "react";

function RecipeFormat({ handleDelete, recipe }) {
    //todo: format recipe list and map as table rows, table data being each key pair
    return (
        <tr>
           <td>{recipe.name}</td> 
           <td>{recipe.cuisine}</td>
           <td>
            <img src={recipe.photo} alt={recipe.name} />
           </td>
           <td className="content_td"><p>{recipe.ingredients}</p></td>
           <td className="content_td"><p>{recipe.preparation}</p></td>
           <td>
            <button name='delete' onClick={handleDelete}>Delete</button>
           </td>
        </tr>
    );   //todo: each recipe has a delete button that uses handleDelete onClick
}

export default RecipeFormat;