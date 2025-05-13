// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

// const MealCard = () => {
// return (
//     <div className="relative rounded-xl border border-gray-200 p-2 shadow hover:shadow-lg transition">
//       <button className="absolute top-2 left-2 text-red-500 text-xl">
//         <FontAwesomeIcon icon={faHeart} />
//       </button>
//       <img src={meals.image} alt={meals.title} className="rounded-lg h-40 w-full object-cover" />
//       <div className="p-2 text-right">
//         <div className="flex justify-between items-center mt-2">
//           <p className="font-semibold">{meals.title}</p>
//           <span className="text-orange-500 text-sm">{meals.price}</span>
//         </div>
//         <p className="text-gray-400 text-sm mt-1">من {meals.chef}</p>
//         <button className="mt-2 w-full text-center bg-orange-100 text-orange-500 rounded-md py-1 text-sm">
//           أضف للسلة
//         </button>
//         <div className="flex justify-end items-center text-amber-400 mt-2">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <FontAwesomeIcon
//               key={i}
//               icon={faStar}
//               className={i < Math.round(meals.rating) ? "text-amber-400" : "text-gray-300"}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MealCard

