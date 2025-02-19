import RecipesList from "@/components/recipes";
const fetchRecipes = async () => {
    try{
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        return data?.recipes;
    }
    catch(err){
        throw new Error(err);
    }
}


const Recipes = async () => {
    const recipes = await fetchRecipes();
    // console.log(recipes);
    return (
            <RecipesList recipes={recipes}/>
    )
}
export default Recipes;