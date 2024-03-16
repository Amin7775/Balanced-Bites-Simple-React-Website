import { useEffect } from "react";
import { useState } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const AllRecipes = () => {
    const [allRecipe,setAllRecipe]=useState([])
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setAllRecipe(data))
    },[])
    // console.log(allRecipe)/
    return (
        <div className="border">
            a
            {/* cards */}
            <div className="grid grid-cols-2 gap-6">
                {allRecipe.map(recipe =>(
                    <SingleRecipe key={recipe.recipe_id} recipe={recipe}></SingleRecipe>
                    ) 
                )}
            </div>
        </div>
    );
};

export default AllRecipes;