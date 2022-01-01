import { useState } from "react";
import styled from "styled-components";

// Wird für jedes einzelne Todo ausgeführt (dynamisch)
function Todo({ title, color }) {
  const [isDone, setIsDone] = useState(false); //initialwert isDone = false - ARRAY DESTRUCTION

  function markDone() {
    setIsDone(!isDone); // function die unten bei input aufgerufen wird.
  }

  // const look = isDone ? "strike" : "";

  return (
    <Strike>
      <label>
        <input type="checkbox" onChange={markDone} />
        {title}
      </label>
    </Strike>
  );
}

export default Todo;

const Strike = styled.li`
  text-decoration: line-through;
`;

// .strike {
//   text-decoration: line-through;
// }
