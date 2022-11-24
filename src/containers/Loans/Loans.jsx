import React, { useState, useEffect } from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import { myLoans } from "../../services/ApiCalls";

function Loans() {
  const token = localStorage.getItem("jwt");
  const [loans, setLoans] = useState([]);
  // console.log(loans);

  useEffect(() => {
    if (loans.length === 0) {
      myLoans(token).then((loans) => setLoans(loans));
    }
  });

  if (loans.length > 0) {
    return (
      <div className="container-fluid homeDesign">
        <div className="row d-flex justify-content-center">
          <div className="col-10 rowDesign">
            {" "}
            {loans.map((loan, index) => {
              console.log(loan.Movie);
              return <FilmCard key={index} movie={loan.Movie} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>a</div>;
  }
}

export default Loans;
