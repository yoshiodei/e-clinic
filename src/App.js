import Mainsection from "./components/MainSection";
import Sidenav from "./components/SideNav";


function App() {

  const patients = [
    {
      id: 1,
      name: "John Doe",
      dateOfBirth: "13-03-1992",
      age: 14,
      gender: "Male",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"400",
      retailprice:"MKS"
    },
  
    {
      id: 2,
      name: "Sandra Mensah",
      dateOfBirth: "20-03-1997",
      age: 23,
      gender: "Female",
      address: "Klagon, Accra",
      phoneNumber: "0579853237",
      paymentMethod: "NHIS",
      mafg:"2012-2-14",
      exp:"2028-10-12",
      availiable:"700",
      retailprice:"MKS239"
    },
    {
      id: 3,
      name: "Lois Lartey",
      dateOfBirth: "13-08-1972",
      age: 39,
      gender: "Female",
      address: "Mango St. East Legon",
      phoneNumber: "0243049937",
      paymentMethod: "Cash",
      mafg:"2022-10-14",
      exp:"2028-10-12",
      availiable:"300",
      retailprice:"MKS"
    },
    {
      id: 4,
      name: "Kelvin Sarsu",
      dateOfBirth: "15-03-1985",
      age: 13,
      gender: "Male",
      address: "Orange St. East Legon",
      phoneNumber: "0243869937",
      paymentMethod: "NHIS",
      mafg:"2012-10-14",
      exp:"2018-10-12",
      availiable:"400",
      retailprice:"MKS2321"
    },
    {
      id: 5,
      name: "Katelyn Boakye",
      dateOfBirth: "31-05-2011",
      age: 18,
      gender: "Female",
      address: "Korlegonnor, Accra",
      phoneNumber: "0266849937",
      paymentMethod: "Cash",
      mafg:"2019-10-14",
      exp:"2027-10-12",
      availiable:"300",
      retailprice:"MKS"
    },
    {
      id: 6,
      name: "Samuel Nartey",
      dateOfBirth: "03-11-1972",
      age: 34,
      gender: "Male",
      address: "Kwame Nkrumah Circle, Accra",
      phoneNumber: "0203946287",
      paymentMethod: "Cash",
      mafg:"2019-10-1",
      exp:"2029-10-12",
      availiable:"700",
      retailprice:"MKS"
    },
    {
      id: 7,
      name: "Cynthia Bills",
      dateOfBirth: "23-09-1962",
      age: 54,
      gender: "Female",
      address: "Nima, Accra",
      phoneNumber: "054479347",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2028-1-12",
      availiable:"420",
      retailprice:"MKS"
    },
    {
      id: 8,
      name: "Jack Harris",
      dateOfBirth: "13-03-1995",
      age: 25,
      gender: "Male",
      address: "Sowutuom, Accra",
      phoneNumber: "0244549937",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2023-10-12",
      availiable:"200",
      retailprice:"MKS"
    },
    {
      id: 9,
      name: "Mary Jane",
      dateOfBirth: "13-03-1992",
      age: 23,
      gender: "Female",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "Cash",
      mafg:"2019-10-1",
      exp:"2028-10-1",
      availiable:"700",
      retailprice:"MKS"
    },
    {
      id: 10,
      name: "Abena Korkor",
      dateOfBirth: "13-03-1992",
      age: 39,
      gender: "Female",
      address: "Parsnip St. East Legon",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
      mafg:"2019-10-4",
      exp:"2028-10-2",
      availiable:"200",
      retailprice:"MKS"
    },
    {
      id: 11,
      name: "Akwasi Bini",
      dateOfBirth: "13-03-2009",
      age: 13,
      gender: "Male",
      address: "Algon St. Tema",
      phoneNumber: "0238563945",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2028-10-2",
      availiable:"30",
      retailprice:"MKS"
    },
    {
      id: 12,
      name: "Esther Owusua",
      dateOfBirth: "20-07-2002",
      age: 19,
      gender: "Female",
      address: "Latebiokorshie, Accra",
      phoneNumber: "0544829306",
      paymentMethod: "Cash",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"400",
      retailprice:"MKS"
    },
    {
      id: 13,
      name: "Jacob Sower",
      dateOfBirth: "13-12-1982",
      age: 34,
      gender: "Male",
      address: "Lapaz, Accra",
      phoneNumber: "0507291726",
      paymentMethod: "Cash",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"400",
      retailprice:"MKS"
    },
    {
      id: 14,
      name: "Cassandra Smalls",
      dateOfBirth: "10-06-1959",
      age: 54,
      gender: "Female",
      address: "Lagoon St Dansoman",
      phoneNumber: "0578192712",
      paymentMethod: "Cash",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"400",
      retailprice:"MKS8737"
    
    },
    {
      id: 15,
      name: "Lewis Brown",
      dateOfBirth: "13-03-1992",
      age: 67,
      gender: "Male",
      address: "Awoshie, Accra",
      phoneNumber: "0524808128",
      paymentMethod: "Cash",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"300",
      retailprice:"MKS"
    },
    {
      id: 16,
      name: "Simon Adams",
      dateOfBirth: "13-03-1992",
      age: 54,
      gender: "Male",
      address: "Labone, Accra",
      phoneNumber: "0203049937",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2028-10-11",
      availiable:"200",
      retailprice:"MKS"
    },
    {
      id: 17,
      name: "Henry Delali",
      dateOfBirth: "13-03-1989",
      age: 29,
      gender: "Male",
      address: "James Town, Accra",
      phoneNumber: "0503647834",
      paymentMethod: "NHIS",
      mafg:"2019-10-14",
      exp:"2028-10-12",
      availiable:"800",
      retailprice:"MKS"
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
