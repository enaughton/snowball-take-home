import Head from "next/head";
import Affiliate from "../components/Affiliate";

export default function Home(props) {
  return (
    <div className="flex">
      <Head>
        <title>Snowball Take Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="m-8 text-3xl bold">Payouts Page </h1>

        <div className="p-8">
          <div className="bg-white border border-gray-200 rounded-md shadow-lg ">
            <div className="p-4">
              <h3>Payout Overview</h3>
            </div>
            <div className="flex">
              <div className="flex p-8 hover:scale-105 ">
                <div className="items-center p-4 bg-white rounded-lg shadow-md shadow-indigo-50">
                  <div>
                    <h2 className="inline-flex font-bold text-gray-900 text-md">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <span className="pl-2"> Total paid Payouts</span>
                    </h2>
                    <h3 className="mt-2 text-xl text-center">$0.00</h3>
                  </div>
                </div>
              </div>
              <div className="flex p-8 hover:scale-105 ">
                <div className="items-center p-4 bg-white rounded-lg shadow-md shadow-indigo-50">
                  <div>
                    <h2 className="inline-flex font-bold text-gray-900 text-md">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <span className="pl-2"> Total Unpaid Payouts</span>
                    </h2>
                    <h3 className="mt-2 text-xl text-center">$185.88</h3>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 duration-500 sm:w-1/2 lg:w-1/3 hover:scale-105">
                <div className="items-center p-4 bg-white rounded-lg shadow-md shadow-indigo-50">
                  <div>
                    <h2 className="inline-flex font-bold text-gray-900 text-md">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      <span className="pl-2"> Total Ready Payouts</span>
                    </h2>
                    <h3 className="mt-2 text-xl text-center text-green-500">
                      $185.88
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800"></div>
            </header>

            <div className="p-3 overflow-x-auto">
              <div className="flex">
                <div className="flex p-4">
                  <button>
                    <select
                      className="text-sm text-white bg-blue-500 rounded-sm "
                      id="filter-by"
                      placeholder="Filter"
                    >
                      <option value="">Sort by</option>
                      <option value="Revenue Generated">
                        Revenue Generated
                      </option>
                      <option value="Most Recent Referral">
                        Most Recent Referral
                      </option>
                    </select>
                  </button>
                </div>
                <div className="flex p-4">
                  <select
                    className="text-sm text-white bg-blue-500 rounded-sm "
                    id="filter-by"
                  >
                    <option value="">Filter by</option>
                    <option value="Revenue Generated">Revenue Generated</option>
                    <option value="Most Recent Referral">
                      Most Recent Referral
                    </option>
                  </select>
                </div>
                <button className="flex p-4">
                  <select
                    className="justify-end text-sm text-white bg-gray-500 rounded-sm input input-select"
                    id="filter-by"
                    disabled
                  >
                    <option value="">Action</option>
                    <option value="Revenue Generated">Revenue Generated</option>
                    <option value="Most Recent Referral">
                      Most Recent Referral
                    </option>
                  </select>
                </button>
              </div>
              <table className="w-full table-auto">
                <thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        value="id-1"
                        click="toggleCheckbox($el, 2890.66)"
                      />
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Affiliate Name
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        {" "}
                        Move recent referral
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Revenue Generated
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Paid Payouts
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Unpaid Payouts
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Ready Payouts
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Breakdown</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Type</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Actions</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  <Affiliate />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
