import { MouseEventHandler } from "react";

function PromptResultTable() {
  const promptResults = ["name1", "name2", "name3", "name4", "name5"];
  const message = promptResults.length === 0 ? <p>No character found</p> : null;

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) =>
    console.log(event);

  return (
    <>
      {message}
      <ul className="list-group">
        {promptResults.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PromptResultTable;
