import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
const RecipesList = ({ recipes }) => {
  return (
    <div>
      <div className="flex font-sans width-full position-absolute">
        <Link href="/" className="">
          <Image src="/logo.png" alt="logo" width={150} height={180} />
        </Link>
       
        <h1 className="text-4xl font-bold mt-5 mb-4">Explore Food Items</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20">
        {
          // recipes && recipes.length > 0 ?
          recipes.map((recipes) => (
            <Link key={recipes.id} href={`/recipes/${recipes.id}`}>
              <Card className="w-96 mb-5">
                <CardContent className="overflow-hidden rounded-md cursor-pointer transition-transform duration-150 hover:scale-110">
                  <h1 className="text-xl text-gray-900 text-center font-semibold mt-3">
                    {recipes.name}
                  </h1>
                  <div className="flex justify-center">
                    <Image
                      src={recipes.image}
                      alt={recipes.name}
                      width={250}
                      height={250}
                      className="rounded-lg w-fit pt-4"
                    />
                  </div>

                  <div className="flex justify-between mt-2 w-72 ml-6">
                    <p className="text-center text-base font-semibold text-gray-500">
                      Rating: {recipes.rating}
                    </p>
                    <p className="text-center text-base font-semibold text-gray-500">
                      Cuisine: {recipes.cuisine}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        }
      </div>
    </div>
  );
};
export default RecipesList;
