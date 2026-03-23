export const MenuBar = ({
  isOpen,
  setisOpen,
}: {
  isOpen: boolean;
  setisOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setisOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#020617] z-50
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={() => setisOpen(false)}
            className="mb-4 text-gray-400 hover:text-white"
          >
            ✕ Close
          </button>

          {/* Menu Items */}
          <ul className="space-y-4">
            <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Saved Components
            </li>
            <li className="hover:text-blue-400 cursor-pointer">History</li>
            <li className="hover:text-blue-400 cursor-pointer">Templates</li>
            <li className="hover:text-blue-400 cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
};
