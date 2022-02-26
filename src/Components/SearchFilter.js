import { useState } from "react";
import "./styles.css";
export default function SearchFilter({ state }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Name"
        />
      </div>

      <ol style={{ height: "75vh", overflowY: "scroll", width: "50vw" }}>
        {state &&
          state
            .filter((e) => {
              return (
                `${e.name.first} ${e.name.last}`
                  .toLowerCase()
                  .startsWith(search.toLowerCase()) ||
                `${e.name.last} `.toLowerCase().startsWith(search.toLowerCase())
              );
            })
            .map((e) => {
              return (
                <li>
                  {e.name.title} {e.name.first} {e.name.last}
                </li>
              );
            })}
      </ol>
    </div>
  );
}
