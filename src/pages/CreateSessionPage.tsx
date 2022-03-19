import { useParams } from "react-router-dom";
import SessionForm, {
  SessionFormInterface,
} from "../components/FormComponent/Form";

const CreateSessionPage = ({
  date,
  comment,
  iFrame,
}: SessionFormInterface): JSX.Element => {
  const { id } = useParams();
  const isEditing = !!(id as string);
  const title = isEditing ? "Edit session" : "New session";
  return (
    <>
      <h2>{title}</h2>
      <SessionForm
        isEditing={isEditing}
        id={id as string}
        title={title}
        date={date}
        comment={comment}
        iFrame={iFrame}
      />
    </>
  );
};

export default CreateSessionPage;
