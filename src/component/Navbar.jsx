import { FaCar } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar  bg-neutral p-3 text-slate-100 shadow-xl mb-16">
      <div className="logo text-2xl font-bold flex gap-3 m-auto">
        <FaCar className="text-3xl" /> Trycar
      </div>
    </nav>
  );
}

export default Navbar;
