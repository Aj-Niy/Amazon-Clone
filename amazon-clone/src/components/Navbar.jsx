

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">amazon.in</div>

      <div className="search">
        <select>
          <option>All</option>
        </select>

        <input placeholder="Search Amazon.in" />

        <button>🔍</button>
      </div>

      <div className="nav-right">
        <span>Hello, Sign in</span>
        <span>Returns & Orders</span>
        <span>🛒 Cart</span>
      </div>
    </nav>
  );
}