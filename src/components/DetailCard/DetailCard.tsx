import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SessionProps } from "../../types/Session";

const DetailCard = ({
  session: { title, date, comment, iFrame, id },
  actionOnClick,
}: SessionProps): JSX.Element => {
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
        <div className="button-container">
          <div>
            <FontAwesomeIcon
              title="trash"
              icon={faTrashCan}
              className="delete_card"
              onClick={actionOnClick}
              data-testid="deleteIcon"
            />
          </div>
          <button>
            <Link to={`edit/session/${id}`} />
            Edit
          </button>
        </div>
      </div>
    </Card>
  );
};
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
    margin-top: 200px;
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
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  h1,
  p {
    padding: 10px;
  }
  h1 {
    color: #219ebc;
  }
`;

export default DetailCard;
