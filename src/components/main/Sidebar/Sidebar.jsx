import "./sidebar.css";

const Sidebar = ({ wantToCook, handlePreparing, preparing , totalTime , totalCalories}) => {
  console.log(preparing);
  return (
    <div className="border-2 rounded-2xl pt-8 pb-16 px-4">
      {/* want to cook section */}
      <div>
        <h1 className="font-semibold text-2xl text-center">
          Want to cook : {wantToCook.length}
        </h1>
        <hr className="w-[70%] mx-auto my-4 border-t-2" />
        {/* table */}
        <table className="w-full text-[#878787]">
          <thead>
            <tr>
              <th className="w-1/12 text-start pl-2">No.</th>
              <th className="text-start px-1">Name</th>
              <th className="w-1/6 text-start px-1">Time</th>
              <th className="w-1/6 text-start px-1">Calories</th>
              <th className="w-1/4">Action</th>
            </tr>
          </thead>

          <tbody>
            {wantToCook.map((recipe, index) => (
              <tr key={index} className="bg-[#28282808]">
                <td className="pl-4 text-[#282828CC] font-semibold py-1">
                  {index + 1}
                </td>
                <td className="px-2 py-1">{recipe.recipe_name}</td>
                <td className="px-2 py-1">{recipe.preparing_time}</td>
                <td className="px-2 py-1">{recipe.calories}</td>
                <td>
                  <div className="flex items-center justify-center py-1">
                    <button
                      onClick={() => handlePreparing(recipe)}
                      className="btn bg-[#0BE58A] px-5 hover:bg-[#0BE58A]/[.85] rounded-[50px]"
                    >
                      Preparing
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking section */}
      <div className="mt-8">
        <h1 className="font-semibold text-2xl text-center">
          Currently Cooking : {preparing.length}
        </h1>
        <hr className="w-[70%] mx-auto my-4 border-t-2" />
        {/* table */}
        <table className="w-full text-[#878787]">
          <thead>
            <tr>
              <th className="w-1/12 text-start pl-2">No.</th>
              <th className="text-start px-1">Name</th>
              <th className="w-1/6 text-start px-1">Time</th>
              <th className="w-1/6 text-start px-1">Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparing.map((recipe, index) => (
              <tr key={index} className="bg-[#28282808]">
                <td className="pl-4 text-[#282828CC] font-semibold py-1">{index+1}</td>
                <td className="px-2 py-1">{recipe.recipe_name}</td>
                <td className="px-2 py-1">{recipe.preparing_time}</td>
                <td className="px-2 py-1">{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
        <div className="flex justify-between mt-3 font-semibold text-[#878787]">
              <p>Total Time= {totalTime} Minutes</p>
              <p>Total Calories= {totalCalories} Calories</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
