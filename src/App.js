import Mainsection from "./components/MainSection";
import Sidenav from "./components/SideNav";

const patients = [
  {
    id: 1,
    name: "john Doe",
    dateOfBirth: "13-03-1992",
    age: 14,
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

  {
    id: 2,
    name: "Mary Jane",
    dateOfBirth: "13-03-1992",
    age: 23,
    gender: "Female",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "Cash",
  },
  {
    id: 3,
    name: "Abena Korkor",
    dateOfBirth: "13-03-1992",
    age: 39,
    gender: "Female",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "NHIS",
  },
  {
    id: 4,
    name: "Akwasi Bini",
    dateOfBirth: "13-03-1992",
    age: 13,
    gender: "Male",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "NHIS",
  },
  {
    id: 5,
    name: "Esther Owusua",
    dateOfBirth: "13-03-1992",
    age: 19,
    gender: "Female",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "Cash",
  },
  {
    id: 6,
    name: "Jacob",
    dateOfBirth: "13-03-1992",
    age: 34,
    gender: "Male",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "Cash",
  },
  {
    id: 7,
    name: "Simon Adams",
    dateOfBirth: "13-03-1992",
    age: 54,
    gender: "Male",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "NHIS",
  },
  {
    id: 8,
    name: "James Wilson",
    dateOfBirth: "13-03-1992",
    age: 25,
    gender: "Male",
    address: "Parsnip St. East Legon",
    phoneNumber: "0203049937",
    paymentMethod: "NHIS",
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
