export const NavBar = ({ setisOpen }: { setisOpen: (isOpen: boolean) => void }) => {
  return (
    <div className="p-4 flex items-center bg-gray-900 border-b border-gray-800">
      <button 
        onClick={() => setisOpen(true)}
        className="text-white hover:text-gray-300 mr-4"
      >
        ☰ Menu
      </button>
      <h1 className="text-xl font-bold">Ai componet Builder</h1>
    </div>
  );
};
