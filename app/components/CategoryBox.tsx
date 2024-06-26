import { FC } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-white transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
