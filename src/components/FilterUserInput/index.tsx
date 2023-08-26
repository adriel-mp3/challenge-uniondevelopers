import React from "react";

interface FilterUserInputProps {
  setFilterText: (text: string) => void;
}

const FilterUserInput = ({ setFilterText }: FilterUserInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="text-input" className="sr-only">
        Search user
      </label>
      <input
        className="text-input"
        type="text"
        placeholder="Search user..."
        id="text-input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterUserInput;
