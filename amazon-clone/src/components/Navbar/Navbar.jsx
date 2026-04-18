function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">amazon.in</div>
        <div className="location">Delivering to Dadri</div>
      </div>

      <div className="nav-center">
        <select>
          <option>All</option>
        </select>
        <input placeholder="Search Amazon.in" />
        <button>🔍</button>
      </div>

      <div className="nav-right">
        <div>Hello, Sign in</div>
        <div>Returns & Orders</div>
        <div>Cart 🛒</div>
      </div>
    </div>
  )
}

export default Navbar