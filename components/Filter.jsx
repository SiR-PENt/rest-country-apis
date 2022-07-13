import Dropdown from "react-bootstrap/Dropdown";
import {v4 as uuidv4} from 'uuid';

export default function Filter({regions}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {regions.map((region) => {
          const id = uuidv4();
          return <Dropdown.Item key={id}>{region}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
