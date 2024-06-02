import { Checkbox } from "@nextui-org/checkbox";

export default function Categorie({ categories, hanleFilter }) {
  return (
    <ul className="flex flex-col gap-4 text-xs">
      {categories.map((c) => (
        <li className="text-gray-300" key={c.id}>
          <label className="flex gap-3 cursor-pointer">
            {c.chek ? (
              <Checkbox
                size="xs"
                defaultSelected={true}
                className="p-0 pr-2"
                onChange={(e) => hanleFilter(c.val, e)}
              ></Checkbox>
            ) : (
              <Checkbox
                size="xs"
                className="p-0 pr-2"
                onChange={(e) => hanleFilter(c.val, e)}
              ></Checkbox>
            )}
            {c.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
