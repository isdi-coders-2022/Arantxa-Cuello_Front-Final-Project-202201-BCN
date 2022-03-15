import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "../../types/Session";
import styled from "styled-components";

const Card = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  .card-container {
    background-color: #eee;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 550px;
  }
  .delete_card {
    width: 25px;
    height: 25px;
    padding-top: 20px;
    cursor: pointer;
  }
  h1,
  p {
    padding: 10px;
  }
  h1 {
    color: #219ebc;
  }
`;

interface SessionCardProps {
  session: Session;
  actionOnClick: React.MouseEventHandler<SVGSVGElement>;
}
//faltan las acciones de modificar y borrar la session
const SessionCard = ({
  session: { title, date, comment, iFrame },
  actionOnClick,
}: SessionCardProps): JSX.Element => {
  return (
    <Card>
      <div className="card-container">
        <h1>{title}</h1>
        <p>{date}</p>
        <div>
          <p>{comment}</p>
        </div>
        <iframe
          width="460"
          height="215"
          src={iFrame}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <FontAwesomeIcon
            title="trash"
            icon={faTrashCan}
            className="delete_card"
            onClick={actionOnClick}
            data-testid="deleteIcon"
          />
        </div>
      </div>
    </Card>
  );
};

export default SessionCard;
