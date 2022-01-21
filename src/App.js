import Mainsection from "./components/MainSection";
import Sidenav from "./components/SideNav";

const patients = [
  {
    id: 1,
    name: "john Doe",
    dateOfBirth: "13-03-1992",
    age: () => CurrentDay - DateOfBirth,
    gender: "Male",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "NHIS",
    // presentingComplaint: "severe headache and joint pains",
    // historyOfComplaint: "the pain has been persisting since last week",
    // tests: [
    //   {
    //     name: "‘Random Blood Sugar Test’",
    //     image: "rbstest.jpg",
    //     comment: "test complete",
    //   },
    // ],
    // clinicalDetail: "‘sample detail’",
    // generalComment: "sample comment",
    // diagnosis: "Malaria",
    // drugs: [
    //   {
    //     name: "paracetamol",
    //     amount: 2,
    //     timesADay: "OD",
    //     duration: 2,
    //   },
    //   {
    //     name: "tramadol",
    //     amount: 6,
    //     timesADay: "OD",
    //     duration: 3,
    //   },
    // ],
    // prescriptionComment: "sample comment",
    // managementPlan: "sample plan",
    // examinationStage: true,
    // diagnoseStage: true,
    // prescribeStage: true,
  },
];

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Mainsection props={patients} />
    </div>
  );
}

export default App;
