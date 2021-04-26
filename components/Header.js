import DashboardIcon from "@material-ui/icons/Dashboard";
import CropLandscapeIcon from "@material-ui/icons/CropLandscape";
import AppsIcon from "@material-ui/icons/Apps";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header() {
  return (
    <div className="flex border-b bg-gray-50 shadow-md p-3 justify-between">
      <div className="flex space-x-3">
        <p className="text-gray-400">Id</p>
        <p>4564321asda7212313</p>
        <DashboardIcon className="text-gray-500" />
        <CropLandscapeIcon className="text-gray-300" />
      </div>
      <div className="flex space-x-2 text-gray-400 mr-3">
        <AppsIcon />
        <div className="flex space-x-1">
          <ExitToAppIcon />
          <p className="text-gray-600 font-semibold">close</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
