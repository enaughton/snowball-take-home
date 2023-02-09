import React from "react";
import influencers from "/influencer.json";
import Modal from "./Modal";

export default function Affiliate() {
  return (
    <>
      {influencers.map((influencer) => {
        return (
          <tr key={influencer.id}>
            <td className="p-2">
              <input
                type="checkbox"
                className="w-5 h-5"
                value="id-1"
                click="toggleCheckbox($el, 2890.66)"
              />
            </td>
            <td className="p-2">
              <div className="font-medium text-gray-800">
                {influencer.affiliate}
              </div>
            </td>
            <td className="p-2">
              <div className="text-center">{influencer.recentReferral}</div>
            </td>
            <td className="p-2">
              <div className="font-medium text-center text-green-500">
                {influencer.revenueGen}
              </div>
            </td>
            <td className="p-2">
              <div className="flex justify-center">{influencer.paidOut}</div>
            </td>
            <td className="p-2">
              <div className="flex justify-center">{influencer.unPaid}</div>
            </td>
            <td className="p-2">
              <div className="flex justify-center">{influencer.readyPay}</div>
            </td>
            <td className="p-2">
              <div className="flex justify-center">
                <a className="flex items-center text-blue-600">
                  View{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>{" "}
              </div>
            </td>
            <td className="p-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
            </td>
            <td className="p-2">
              <div className="justify-center">
                <Modal />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}
