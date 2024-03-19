import { useState, useRef, useEffect } from "react";
import "./DropDown.css";

const Dropdown = ({ items, title, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [addItem, setAddItem] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const filtredItems = items.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchItems(filtredItems);

    if (!filtredItems.length && searchValue) {
      setAddItem(true);
    }
  }, [searchValue]);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsOpen(false);
      setSearchValue("");
    } else {
      setIsOpen(true);
    }
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleAddItem = () => {
    items.push(searchValue); // Так не робиться. Потрібно кудись передавати. Намагався зробити перевикористовуваним
  };

  return (
    <div ref={ref}>
      <span>{selectedValue || title}</span>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <ul>
            {searchItems.map((item, index) => (
              <li key={index} onClick={() => handleOptionClick(item)}>
                {item}
              </li>
            ))}
          </ul>
          {addItem && (
            <button onClick={handleAddItem}>Додати свій варіант</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
