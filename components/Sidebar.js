import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LayersIcon from "@material-ui/icons/Layers";
import LockIcon from "@material-ui/icons/Lock";
import EcoIcon from "@material-ui/icons/Eco";
import Link from "next/link";

function Sidebar({ option }) {
  return (
    <div
      className={`${option} transition duration-200 ease-in-out lg:w-[300px] h-screen shadow-2xl bg-white-900 bg-white`}
    >
      <div className="border-b py-2.5 flex justify-evenly">
        <p className="text-xl font-semibold">Dashboard</p>
        <p>|</p>
        <p className="text-gray-400 text-lg">Wallet</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-6">
          <h1 className="text-gray-500">Menu</h1>

          <Link href="/">
            <div>
              <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
                <DonutLargeIcon className="group-hover:text-blue-600 " />
                <p className="group-hover:text-blue-600 ">Dashboard</p>
              </div>
            </div>
          </Link>

          <Link href="/transaction">
            <div>
              <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
                <ClearAllIcon className="group-hover:text-blue-600 " />
                <p className="group-hover:text-blue-600 ">Transaction</p>
              </div>
            </div>
          </Link>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <SyncAltIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Send</p>
            </div>
          </div>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <ArrowUpwardIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Receive</p>
            </div>
          </div>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <ArrowDownwardIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Buy</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-gray-500">Delegation</h1>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <LockIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Delegate</p>
            </div>
          </div>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <EcoIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Claim Rewards</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-gray-500">Staking</h1>

          <div>
            <div className="flex group text-gray-700 space-x-4 cursor-pointer hover:bg-gray-50">
              <LayersIcon className="group-hover:text-blue-600 " />
              <p className="group-hover:text-blue-600 ">Validate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
