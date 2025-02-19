import Image from "next/image";
import Link from "next/link";
const RecipeDetails = ({ data }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex">
        <Link href="/" className="absolute top-0 left-0">
          <Image src="/logo.png" alt="logo" width={150} height={180} />
        </Link>
        <div className="flex">
          <Link href="/recipes" className="pt-11 pr-11">
            <Image src="/back3.jpg" alt="logo" width={40} height={40} />
          </Link>
          <h1 className="text-4xl font-bold mt-10">{data.name}</h1>
        </div>
      </div>

      <div className="flex h-full w-3/4 mt-20 ml-16">
        <div className="h-1/2 w-1/2 flex">
          <Image
            src={data.image}
            alt=""
            width={200}
            height={200}
            className="ml-20 w-80 h-full rounded-md"
          />
        </div>
        <div className="h-3/4 w-1/2">
          <p className="text-3xl font-semibold mb-3">Ingredients :</p>
          <ul className="grid grid-cols-3">
            {data.ingredients.map((i, index) => (
              <li key={index} className="text-lg">
                {i}
              </li>
            ))}
          </ul>
          <p className="text-3xl font-semibold mb-3">Instructions :</p>
          <ul>
            {data.instructions.map((i, key) => (
              <li key={key} className="text-lg">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default RecipeDetails;
