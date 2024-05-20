export default function Categorie({ categories, hanleFilter }) {
  return (
    <ul className="flex flex-col gap-4 text-xs">
      {categories.map((c) => (
        <li className="text-gray-300" key={c.id}>
          <label className="flex gap-3 cursor-pointer">
            {c.chek ? (
              <input
                defaultChecked
                type="checkbox"
                onChange={(e) => hanleFilter(c.val, e)}
                className="checkbox checkbox-primary w-4 h-4 rounded-md"
              />
            ) : (
              <input
                type="checkbox"
                onChange={(e) => hanleFilter(c.val, e)}
                className="checkbox checkbox-primary w-4 h-4 rounded-md"
              />
            )}
            {c.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
