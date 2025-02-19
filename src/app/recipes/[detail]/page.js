import RecipeDetails from "@/components/recipeDetails";
const fetchRecipeDetails = async (id) => {
    try{
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        return data
        console.log(data)
    }
    catch(err){
        throw new Error(err);
    }
}

const RecipeDetail = async ({params}) => {
    const recipeDet = await fetchRecipeDetails(params?.detail);
    return (<>
            <RecipeDetails data={recipeDet}/>
            </>
    )
}
export default RecipeDetail;