import watch from './../../../assets/images/Frame.png'
import Cal from './../../../assets/images/Cal.png'

const SingleRecipe = ({ recipe, setWantToCook,handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  const threeIngredient = ingredients.slice(0,4)
  return (
    <div>
      <div className="card p-4 border bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[250px]"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5">
          <h2 className="text-2xl font-medium mb-4">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <hr className="my-4" />
          <h2 className="text-xl font-medium">Ingredients : {ingredients.length}</h2>
            <div className="ml-2 text-[#878787] mt-3">
                {   
                    threeIngredient.map((ingredient,index)=>(
                        <li key={index}>{ingredient}</li>
                    ))
                }
                <p className="cursor-pointer mt-1">Click Here for more</p>
            </div>
            <hr className="my-4" />
            <div className="flex gap-5">
                <div className="flex items-center gap-1">
                    <img src={watch} alt="" />
                    <p className='text-[#282828CC]'>{preparing_time} minutes</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src={Cal} alt="" />
                    <p className='text-[#282828CC]'>{calories} calories</p>
                </div>
            </div>
          <div className="card-actions mt-6">
            <button onClick={()=>handleWantToCook(recipe)} className="btn bg-[#0BE58A] hover:bg-[#0BE58A]/[.85] px-6 rounded-[50px] text-lg ">Want To Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
