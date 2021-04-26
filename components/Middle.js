import { Line } from "react-chartjs-2";
function Middle() {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div className="border shadow-xl w-7/12 rounded-xl border-gray-100 bg-white ml-2 h-full">
      <div className="border-b p-4 border-gray-100">
        <p className="font-semibold">eGold</p>
      </div>
      <Line
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
  );
}

export default Middle;
