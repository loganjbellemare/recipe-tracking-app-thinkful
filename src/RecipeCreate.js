import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormData });
  };

  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  console.log("current state of formData:", formData);
  // TODO: Add the required input and textarea form elements.
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required={true}
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required={true}
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                required={true}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required={true}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                required={true}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
