import React, { useState } from "react";
import { X } from "lucide-react";

interface ITagInputProps {
  onChange: (tags: string[]) => void;
}

const TagInput: React.FC<ITagInputProps> = ({ onChange }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const updatedTags = [...tags, inputValue.trim()];
      setTags(updatedTags);
      onChange(updatedTags);
      setInputValue("");
    }
  };

  const handleTagDelete = (index: number) => {
    const modifiedTags = tags.filter((_, i) => i !== index);
    setTags(modifiedTags);
    onChange(modifiedTags);
  };

  return (
    <div className="flex flex-wrap gap-2 border p-2 rounded-md">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-blue-100 px-2 py-1 text-xs rounded-full flex items-center"
        >
          <span className="mr-1">{tag}</span>
          <button
            type="button"
            className="text-sm font-semibold focus:outline-none"
            onClick={() => handleTagDelete(index)}
          >
            <X size={12} />
          </button>
        </div>
      ))}
      <input
        type="text"
        className="border-none text-sm focus-visible:outline-none flex-1"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
      />
    </div>
  );
};

export { TagInput };
