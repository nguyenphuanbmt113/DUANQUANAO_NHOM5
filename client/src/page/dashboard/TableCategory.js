import React from "react";

export const TableCategory = React.memo(() => {
  return (
    <>
      <div class="w-full bg-white shadow-lg rounded-sm border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Category</h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">ID</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">alexshatov@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">philip.h@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});
