import React from "react";
import influencers from "/influencer.json";
import Modal from "./Modal";

export default function Affiliate() {
  return (
    <>
      {influencers.map((influencer) => {
        return (
          <div
            className="flex items-stretch justify-around border-b-2 "
            key={influencer.id}
          >
            <div className="flex items-center justify-center font-medium text-gray-800">
              <input type="checkbox" className="w-4 h-4 mr-4" value="id-1" />
              {influencer.affiliate}
            </div>

            <div className="flex justify-center">{influencer.readyPay}</div>

            <div className="flex justify-center px-2">{influencer.type}</div>
          </div>
        );
      })}
    </>
  );
}
