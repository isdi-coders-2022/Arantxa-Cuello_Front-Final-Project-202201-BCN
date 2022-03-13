import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "../../types/Session";

interface SessionCardProps {
  session: Session;
}
//faltan las acciones de modificar y borrar la session
const SessionCard = ({
  session: { title, date, comment, iFrame },
}: SessionCardProps): JSX.Element => {
  return (
    <li>
      <h1>{title}</h1>
      <p>{date}</p>
      <div>
        <p>{comment}</p>
      </div>
      <iframe
        width="560"
        height="315"
        src={iFrame}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <FontAwesomeIcon icon={faPen} className="modify_card" />
        <FontAwesomeIcon icon={faTrashCan} className="delete_card" />
      </div>
    </li>
  );
};

export default SessionCard;
