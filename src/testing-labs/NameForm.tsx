import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="name">Name</label>

      <input
        id="name"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
      />

      <p>Hello {name}</p>
    </div>
  );
}

export default NameForm;