import React from "react";

const Highlights = () => {
  return (
    <div className="h-full w-[500px] bg-white p-3">
      {/* heading */}
      <div className="font-semibold mb-1">Today's Highligths(14)</div>
      <p className="text-xs text-gray-600">19 Mar 2024</p>
      {/* Income and expense */}

      <div className="flex justify-between gap-4 items-center my-4">
        <div className="flex-1 border-2 border-gray-400 p-2">
          <p className="text-xs text-gray-500">Income</p>
          <p className="text-lg bold text-green-600">100000 CAD</p>
          <p className="text-xs text-gray-500">2 payments recieved</p>
        </div>

        <div className="flex-1 border-2 border-gray-400 p-2">
          <p className="text-xs text-gray-500">Expenses</p>
          <p className="text-lg bold text-red-600">50000 CAD</p>
          <p className="text-xs text-gray-500">5 payments recieved</p>
        </div>
      </div>
      {/* Complete Activies */}

      <div>
        <div className="flex justify-between mb-1">
          <div className="font-semibold mb-1">Completed Activities(14)</div>
          <div className="underline text-sm"> View All </div>
        </div>
        <div className="p-2 border-2  border-gray-300">
          <label className="text-xs text-indigo-700">Gurpeet Singh </label>
          <label className="text-xs text-gray-500 ">
            (Dispatch team) has created
          </label>
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs text-indigo-700">Aman</label>
          <label className="text-xs text-gray-500 ">
            {" "}
            (Driver) Picked up goods at{" "}
          </label>
          <label className="text-xs font-semibold">
            {" "}
            Location_name Load no. AAA-1345
          </label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs text-indigo-700">Gurpeet Singh </label>
          <label className="text-xs text-gray-500 ">
            (Dispatch team) has created
          </label>
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
          <label className="text-xs text-gray-500 "> Will start added by</label>
          <label className="text-xs text-indigo-700">Gurpeet Singh</label>
        </div>
      </div>

      {/* Schedule Activities */}
      <div>
        <div className="flex justify-between mt-4">
          <div className="font-semibold mb-1">Completed Activities(14)</div>
          <div className="underline text-sm"> View All </div>
        </div>
        <div className="p-2 border-2  border-gray-300">
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
          <label className="text-xs text-gray-500 ">
            {" "}
            Will be delivered by
          </label>
          <label className="text-xs text-indigo-700">Aman (driver)</label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs text-indigo-700">Aman</label>
          <label className="text-xs text-gray-500 ">
            {" "}
            (Driver) Picked up goods at{" "}
          </label>
          <label className="text-xs font-semibold">
            {" "}
            Location_name Load no. AAA-1345
          </label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
          <label className="text-xs text-gray-500 "> Will start added by</label>
          <label className="text-xs text-indigo-700">Gurpeet Singh</label>
        </div>
        <div className="p-2 border-b-2 border-x-2  border-gray-300">
          <label className="text-xs font-semibold"> Load no. AAA-1345</label>
          <label className="text-xs text-gray-500 "> Will start added by</label>
          <label className="text-xs text-indigo-700">Gurpeet Singh</label>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
