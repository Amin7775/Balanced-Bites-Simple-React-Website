import { useState } from "react";
import AllRecipes from "../AllRecipes/AllRecipes";
import Sidebar from "../Sidebar/Sidebar";

const Recipes = () => {
  const [wantToCook, setWantToCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook = (recipe) => {
    const {
      recipe_image,
      recipe_name,
      short_description,
      ingredients,
      preparing_time,
      calories,
    } = recipe;

    const find = wantToCook.find(recipeName => recipeName.recipe_name == recipe_name)
    if(find){
      return;
    }
    const newWantToCook = [...wantToCook, recipe];
    setWantToCook(newWantToCook);
  };

  const handlePreparing = (recipe) => {
    // update wantToCook
    const newCook = wantToCook.filter(
      (newRecipeList) => recipe.recipe_name !== newRecipeList.recipe_name
    );
    setWantToCook(newCook);
    // update Preparing section
    const newPreparing = [...preparing, recipe];
    setPreparing(newPreparing);
    // update time
    handleTotalTime(recipe.preparing_time);
    // update calories
    handleTotalCalories(recipe.calories);
  };

  const handleTotalTime = (time) => {
    setTotalTime(time + totalTime);
    // console.log(totalTime)
  };
  const handleTotalCalories = (calorie) => {
    setTotalCalories(calorie + totalCalories);
    // console.log(totalTime)
  };
  return (
    <div className="my-14">
      {/* section header */}
      <div className="text-center">
        <h1 className="text-[40px] font-semibold mb-4">Our Recipes</h1>
        <p className="text-[#150B2B99] max-w-[60%] mx-auto text-lg">
          Dive into a world of culinary delights and gastronomic adventures with
          Our Recipes collection, featuring diverse and mouthwatering dishes to
          tantalize your taste buds.
        </p>
      </div>

      {/* recipes main */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 px-2 lg:px-0 mt-12">
        {/* all Recipes section */}
        <div className="w-full lg:w-3/5">
          <AllRecipes
            setWantToCook={setWantToCook}
            handleWantToCook={handleWantToCook}
          ></AllRecipes>
        </div>
        {/* Sidebar section */}
        <div className="flex-1">
          <Sidebar
            wantToCook={wantToCook}
            handlePreparing={handlePreparing}
            preparing={preparing}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
