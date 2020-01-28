import React, { useState } from "react";
import { useUnregisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Unregister: React.FC<RouteComponentProps> = ({ history }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [unregister] = useUnregisterMutation();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        console.log("form submitted");
        const response = await unregister({
          variables: {
            id,
            email
          }
        });

        console.log(response);

        history.push("/");
      }}
    >
      <div>
        <input
          value={id}
          placeholder="id"
          onChange={e => {
            setId(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button type="submit">unregister</button>
    </form>
  );
};