import React from "react";

const Cardobj = [
  {
    text: "Bubble Sort",
    img: "/Images/SortingAlgo/bubbleSort1.jpg",
    description:
      "Compares adjacent elements and swaps them if they’re in the wrong order. Repeats this process until the array is sorted. Simple but inefficient for large datasets.",
  },
  {
    text: "Selection Sort",
    img: "/Images/SortingAlgo/SelectionSort.png",
    description:
      "Finds the minimum element and places it at the beginning. Repeats for the rest of the array, one element at a time. It’s easy to implement but not very fast.",
  },
  {
    text: "Insertion Sort",
    img: "/Images/SortingAlgo/insertionSort.png",
    description:
      "Builds the final sorted array one item at a time. Inserts each new element into its correct position. Efficient for small or nearly sorted data.",
  },
  {
    text: "Merge Sort",
    img: "/Images/SortingAlgo/MergeSort.png",
    description:
      "Divides the array into halves, sorts them, and merges them. Follows a divide-and-conquer approach. Very efficient and stable, even on large data.",
  },
];

const SortingCards = () => {
  return (
    <div className=" mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-red-300 ">
      {Cardobj.map((card, index) => (
        <div
          key={index}
          className="bg-white w-[400px] h-[1oopx] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden object-fit"
        >
          <img
            src={card.img}
            alt={card.text}
            className="h-40 w-full object-cover object-top rounded-t-2xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {card.text}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortingCards;
