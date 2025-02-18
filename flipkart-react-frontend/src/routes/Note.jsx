import { MdOutlineNotificationsPaused } from "react-icons/md";
import Header from "../components/Header";
const Note = () => {
  return (
    <>
      <Header />
      <div className="wishlist">
        <MdOutlineNotificationsPaused size={25} />
        No New Notifications for you.
        <br />
        <img
          src={"../images/bellsleep.png"}
          alt="No Notifications image"
          id="wishImage"
        />
      </div>
    </>
  );
};
export default Note;
