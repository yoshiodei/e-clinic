import Topnav from "./TopNav";
import "./../styles/main-section.css";
import Patientinfo from "./PatientInfo";
import Pagecontent from "./PageContent";

const Mainsection = ({ patients }) => {
  return (
    <main className="main-section">
      <Topnav />
      <Patientinfo />
      <Pagecontent patients={patients} />
    </main>
  );
};

export default Mainsection;
