import { useState } from "react";
import AllRecipes from "../AllRecipes/AllRecipes";
import Sidebar from "../Sidebar/Sidebar";

const Recipes = () => {
  const [wantToCook, setWantToCook] = useState([])

  const handleWantToCook = (recipe)=>{
    const {
      recipe_image,
      recipe_name,
      short_description,
      ingredients,
      preparing_time,
      calories,
    } = recipe;

    const newWantToCook = [...wantToCook, recipe]
    setWantToCook(newWantToCook)
  }
  
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
      <div className="flex">
        {/* all Recipes section */}
        <div className="w-3/5">
          <AllRecipes setWantToCook={setWantToCook} handleWantToCook={handleWantToCook}></AllRecipes>
        </div>
        {/* Sidebar section */}
        <div className="flex-1">
        <Sidebar wantToCook={wantToCook}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
