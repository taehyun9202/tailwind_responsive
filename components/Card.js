function Card(props) {
  let balance = props.balance * 9;
  return (
    <div
      className={`${props.color} flex flex-col p-4 w-3/12 shadow-xl border rounded-xl transform hover:scale-105 cursor-pointer transition dealy-100`}
    >
      <div className="flex justify-between mb-10">
        <div></div>
        <div className="w-10 h-10 p-2 py-4 flex items-center justify-center bg-gray-300 rounded-xl m-1 bg-opacity-30">
          {props.icon}
        </div>
      </div>
      <p className="text-gray-200 text-lg mb-3">{props.title}</p>
      <p className="text-gray-50 text-4xl font-semibold">
        {props.balance} EGLD
      </p>
      <p className="text-gray-300 text-md">${balance}</p>
    </div>
  );
}

export default Card;
