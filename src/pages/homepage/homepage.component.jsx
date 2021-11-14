import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory-menu.component/directory-menu.component";

const HomePage = () => {
    return(
        <div className="homepage">
          <Directory />
        </div>
    )
}

export default HomePage;