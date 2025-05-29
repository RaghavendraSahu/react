import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    reset();
    // Here you can handle the form submission, e.g., send recipe to an API
    console.log("Form submitted with recipe:", recipe);
    // You can also reset the form or show a success message
  };

  return (
    <form className="w-full sm:w-1/2 mx-auto flex flex-col justify-center" onSubmit={handleSubmit(submitHandler)}>
      <input
        type="text"
        placeholder="Image url "
        className="block border-b outline-0 p-2"
        {...register("image")}
      />
      <small className="text-red-400">This is how error is shown.</small>
      <input
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
        className="block border-b outline-0 p-2"
      />
      <small className="text-red-400">This is how error is shown.</small>
      <textarea
        name=""
        {...register("ingredients")}
        placeholder="// add ingredients comman seperated"
        className="block border-b outline-0 p-2"
      ></textarea>
      <small className="text-red-400">This is how error is shown.</small>
      <textarea
        name=""
        {...register("instructions")}
        placeholder="// add instructions"
        className="block border-b outline-0 p-2"
      ></textarea>
      <small className="text-red-400">This is how error is shown.</small>

      <select
        className="block border-b outline-0 p-2"
        {...register("category")}
      >
        <option className="bg-gray-700 text-white" value="breakfast">
          Breakfast
        </option>
        <option className="bg-gray-700 text-white" value="lunch">
          Lunch
        </option>
        <option className="bg-gray-700 text-white" value="dinner">
          Dinner
        </option>
        <option className="bg-gray-700 text-white" value="snack">
          Snack
        </option>
      </select>
      <small className="text-red-400">This is how error is shown.</small>

      <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
        Save{" "}
      </button>
    </form>
  );
};

export default Create;
