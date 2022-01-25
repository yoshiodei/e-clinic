import { ConstructionOutlined } from "@mui/icons-material";
import Mainsection from "./components/MainSection";
import Sidenav from "./components/SideNav";

function App() {
  const patients = [
    {
      id: 1,
      name: "john Doe",
      dateOfBirth: "13-03-1992",
      age: 30,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
    {
      id: 2,
      name: "Ama Jane",
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

  return (
    <div className="App">
      <Sidenav />
      <Mainsection patients={patients} />
    </div>
  );
}

export default App;
