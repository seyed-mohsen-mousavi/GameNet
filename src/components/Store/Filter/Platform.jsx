export default function Platform({ platform, hanleFilter }) {
  return (
    <ul className="flex flex-col gap-3 text-xs">
      {platform.map((p) => {
        return (
          <li className="text-gray-300 flex" key={p.id}>
            <label>
              <div className="flex gap-3 cursor-pointer text-base md:text-xs items-center">
                {p.chek ? (
                  <input
                    defaultChecked
                    type="checkbox"
                    onChange={(e) => hanleFilter(p.val, e)}
                    className="checkbox checkbox-primary w-5 h-5 md:w-4 md:h-4 text-white rounded-md"
                  />
                ) : (
                  <input
                    type="checkbox"
                    onChange={(e) => hanleFilter(p.val, e)}
                    className="checkbox checkbox-primary w-5 h-5 md:w-4 md:h-4 rounded-md"
                  />
                )}
                {p.title}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
