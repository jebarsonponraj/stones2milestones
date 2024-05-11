import { useEffect } from "react"

const usePopup = (isPopupVisible) => {
  useEffect(() => {
    const popupTarget = document.getElementById("popup")
    if (popupTarget) {
      popupTarget.style.display = isPopupVisible ? "flex" : "none"
    }
  }, [isPopupVisible])
}

export default usePopup;
