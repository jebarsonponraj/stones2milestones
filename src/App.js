import { useState } from "react";
import DueComponent from "./components/DueComponent";
import Popup from "./components/Popup";
import ProfileComponent from "./components/ProfileComponent";
import ProgressComponent from "./components/ProgressComponent";
import usePopup from "./hook/usePopup";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handlePopupVisibilityChange = () => {
    setIsPopupVisible(!isPopupVisible)
  }

  usePopup(isPopupVisible)

  return (
    <div className="relative w-full h-full">
          <div
            id="popup"
            className="absolute hidden inset-0 z-50 px-24 py-20 w-full h-full overflow-hidden backdrop-blur-sm flex-col justify-center items-center"
          >
            <Popup handlePopupVisibilityChange={handlePopupVisibilityChange} />
          </div>
          <div className="w-full !mx-auto grid grid-cols-12 gap-8 py-16 px-8">
            <ProfileComponent handlePopupVisibilityChange={handlePopupVisibilityChange} />
            <ProgressComponent />
            <DueComponent />
          </div>
        </div>
  );
}

export default App;
