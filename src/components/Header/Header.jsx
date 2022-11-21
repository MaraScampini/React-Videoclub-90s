import React from "react";

import "./Header.css";

const Header = () => {

    return (
      <div className="headerDesign">
        <input
          type="text"
          name="criteria"
          onChange={(e) => criteriaHandler(e)}
        />

        <div onClick={() => navigate("/login")} className="linkDesign">
          Login
        </div>
        <div onClick={() => navigate("/register")} className="linkDesign">
          Register
        </div>
      </div>
    );
  }
// };
export default Header;
