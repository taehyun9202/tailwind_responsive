import { Pie } from "react-chartjs-2";

const state = {
  datasets: [
    {
      backgroundColor: "rgba(75, 0, 130, 0.7)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

function RightBar() {
  return (
    <div className="bg-white w-5/12 border shadow-xl rounded-xl border-gray-100 h-full">
      <div className="border-b p-4 border-gray-100">
        <p className="font-semibold">Delegation</p>
      </div>
      <div className="flex flex-col justify-center items-center p-3">
        <p className="font-semibold text-lg text-gray-800">21 h 48 m 51 s</p>
        <p className="text-gray-600 text-sm">
          until next rewards batch is distributed
        </p>
      </div>
      <div className="flex justify-center items-center m-auto w-56">
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-3">
        <p className="text-gray-600 text-sm text-center">
          These are rewards available to be claimed right now.
        </p>
      </div>
    </div>
  );
}

export default RightBar;
