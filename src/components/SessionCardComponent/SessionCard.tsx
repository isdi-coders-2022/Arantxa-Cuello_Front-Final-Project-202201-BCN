import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SessionCard = ({ session, modifyCard, deleteCard }) => {
  return (
    <li>
      <h1>{session.title}</h1>
      <p>{session.date}</p>
      <div>
        <p>{session.comment}</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPen}
          className="modify_card"
          onClick={() => modifyCard.id}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="delete_card"
          onClick={() => deleteCard.id}
        />
      </div>
    </li>
  );
};

export default SessionCard;
