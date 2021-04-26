import Card from "./Card";
import AllOutIcon from "@material-ui/icons/AllOut";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LockIcon from "@material-ui/icons/Lock";
import EcoIcon from "@material-ui/icons/Eco";
import RightBar from "./RightBar";
import Middle from "./Middle";

function Container(props) {
  console.log(props);
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 w-screen lg:w-full px-10">
      <div className="py-4 ">
        <p className="text-gray-400 text-lg">text</p>
        <p className="font-bold text-lg transform -translate-y-2">Hi</p>
      </div>

      <div className="flex space-x-3">
        <Card
          title="TOTAL"
          balance={409.98}
          color="bg-gradient-to-r from-indigo-500 to-indigo-400"
          icon={<AllOutIcon className="text-white text-xs" />}
        />
        <Card
          title="AVAILABLE"
          balance={300.75}
          color="bg-gradient-to-r from-red-500 to-red-400"
          icon={<SyncAltIcon className="text-white text-xs" />}
        />
        <Card
          title="CLAIMABLE REWARDS"
          balance={102.32}
          color="bg-gradient-to-r from-yellow-500 to-yellow-400"
          icon={<LockIcon className="text-white text-xs" />}
        />
        <Card
          title="DELEGATED"
          balance={409.98}
          color="bg-gradient-to-r from-blue-500 to-blue-400"
          icon={<EcoIcon className="text-white text-xs" />}
        />
      </div>

      <div className="flex mt-6 space-x-8 flex-1">
        <Middle />
        <RightBar />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/hello`).then(
    console.log(res.json())
  );
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default Container;
