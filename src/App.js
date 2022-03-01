import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";
import Mainsection from "./components/MainSection";
import Sidenav from "./components/SideNav";

function App() {
  //const [consultationList, setConsultationList] = useState([]);
  const [patients, setPatients] = useState([
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
    {
      id: 9,
      name: "Kwasi Moe",
      dateOfBirth: "13-03-1992",
      age: 50,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
    {
      id: 10,
      name: "Kama John",
      dateOfBirth: "13-03-1992",
      age: 25,
      gender: "Female",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "Cash",
    },
    {
      id: 11,
      name: "Boss Torkor",
      dateOfBirth: "13-03-1992",
      age: 19,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
    {
      id: 12,
      name: "Elorm Tah",
      dateOfBirth: "13-03-1992",
      age: 63,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
    {
      id: 13,
      name: "Jacos Owusua",
      dateOfBirth: "13-03-1992",
      age: 12,
      gender: "Female",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "Cash",
    },
    {
      id: 14,
      name: "Jacob Cashrite",
      dateOfBirth: "13-03-1992",
      age: 37,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "Cash",
    },
    {
      id: 15,
      name: "Theo Dor",
      dateOfBirth: "13-03-1992",
      age: 45,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
    {
      id: 16,
      name: "James Bond",
      dateOfBirth: "13-03-1992",
      age: 25,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
    },
  ]);

  const addNewPatient = (obj) => {
    setPatients([...patients, obj]);
    console.log("new patients list", patients);
    console.log("new patient", obj);
  };

  // const submitHandler = () => {
  //   setPatients((prevPatients) => {
  //     return [
  //       {
  //         id: Math.random().toString(),
  //         name: patients.name,
  //         dateOfBirth: patients.dateOfBirth,
  //         age: patients.age,
  //         gender: patients.gender,
  //         address: patients.address,
  //         phoneNumber: patients.phoneNumber,
  //         paymentMethod: patients.paymentMethod,
  //         nextofKin: patients.nextofKin,
  //         kinphoneNumber: patients.kinphoneNumber,
  //       },
  //       ...prevPatients,
  //     ];
  //   });
  // };

  return (
    <div className="App">
      <Sidenav />
      <Mainsection addNewPatient={addNewPatient} patients={patients} />
    </div>
  );
}

export default App;
