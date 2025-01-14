import Link from "next/link";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

// Interface for simplifiedProduct
interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

// Function to fetch data based on category
async function getData(category: string) {
  // Normalize category to lowercase for case-insensitive matching
  const query = `*[_type == "product" && lower(category->name) == "${category.toLowerCase()}"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,        
    "slug": slug.current,
    "categoryName": category->name,
    name,
  }`;

  const data = await client.fetch(query);

  if (!data || data.length === 0) {
    console.warn(`No products found for category: ${category}`);
  }

  return data;
}

// Enable dynamic routes
export const dynamic = "force-dynamic";

// Component for category-specific pages
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-purple-200 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>

        {data.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name || "Product image"}
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-gray-600">
            No products found for the category {params.category}.
          </p>
        )}
      </div>
    </div>
  );
}



// import Link from "next/link";
// import { simplifiedProduct } from "../interface";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";

// async function getData(cateogry: string) {
//   const query = `*[_type == "product" && category->name == "${cateogry}"] {
//         _id,
//           "imageUrl": images[0].asset->url,
//           price,        
//           "slug": slug.current,
//           "categoryName": category->name,
//           name,
//       }`;

//   const data = await client.fetch(query);
//   console.log(data)

//   return data;
// }

// export const dynamic = "force-dynamic";

// export default async function CategoryPage({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const data: simplifiedProduct[] = await getData(params.category);

//   return (
//     <div className="bg-purple-200">
//       <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Our Products for {params.category}
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data.map((product) => (
//             <div key={product._id} className="group relative">
              
//               <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
//               <Link href={`/product/${product.slug}`}>
//                 <Image
//                   src={product.imageUrl}
//                   alt="Product image"
//                   className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                   width={300}
//                   height={300}
//                 />
//                 </Link>
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
                   
//                       {product.name}
                    
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.categoryName}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// import Link from "next/link";
// import { simplifiedProduct } from "../interface";
// import { client } from "../../sanity/lib/client";
// import Image from "next/image";

// // Function to fetch data based on category
// async function getData(category: string) {
//   const query = `*[_type == "product" && category->name == "${category}"] {
//     _id,
//     "imageUrl": images[0].asset->url,
//     price,        
//     "slug": slug.current,
//     "categoryName": category->name,
//     name,
//   }`;

//   const data = await client.fetch(query);
//   console.log(data);

//   return data;
// }

// // Enable dynamic routes
// export const dynamic = "force-dynamic";

// // Component for category-specific pages
// export default async function CategoryPage({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const data: simplifiedProduct[] = await getData(params.category);

//   return (
//     <div className="bg-purple-200">
//       <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Our Products for {params.category}
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data.map((product) => (
//             <div key={product._id} className="group relative">
//               <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
//                 <Link href={`/product/${product.slug}`}>
//                   <Image
//                     src={product.imageUrl}
//                     alt="Product image"
//                     className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                     width={300}
//                     height={300}
//                   />
//                 </Link>
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">{product.name}</h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.categoryName}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

