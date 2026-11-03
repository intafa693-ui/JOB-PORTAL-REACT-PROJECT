import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const jobs = [
  {
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    companyName: "Amazon",
    time: "5 Day ago",
    role: "Senior UI/UX Designer",
    partTime: "Part-Time",
    fullTime: "Senior Level",
    pay: "$20/h",
    location: "San Francisco CA",
  },
  {
    logoUrl: "https://img.magnific.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg",
    companyName: "Google",
    time: "2 Day ago",
    role: "Frontend Developer",
    partTime: "Full-Time",
    fullTime: "Mid Level",
    pay: "$35/h",
    location: "New York NY",
  },
  {
    logoUrl: "https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png",
     companyName: "Microsoft",
    time: "3 Day ago",
    role: "React Developer",
    partTime: "Full-Time",
    fullTime: "Senior Level",
    pay: "$40/h",
    location: "Seattle WA",
  },
  {
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Vp7BxRKMKuoomIdnYs8RT0qVajpxko7PejfRqG4fIw&s",
    companyName: "Apple",
    time: "1 Day ago",
    role: "UI Designer",
    partTime: "Part-Time",
    fullTime: "Junior Level",
    pay: "$25/h",
    location: "Cupertino CA",
  },
  {
    logoUrl: "https://thumbs.dreamstime.com/b/meta-logo-white-background-vector-form-logotype-blue-facebook-instagram-parent-company-design-382048238.jpg",
    companyName: "Meta",
    time: "4 Day ago",
    role: "Software Engineer",
    partTime: "Full-Time",
    fullTime: "Senior Level",
    pay: "$45/h",
    location: "Menlo Park CA",
  },
  {
    logoUrl: "https://static.vecteezy.com/system/resources/previews/042/165/794/non_2x/netflix-logo-transparent-background-free-png.png",
    companyName: "Netflix",
    time: "6 Day ago",
    role: "UX Researcher",
    partTime: "Part-Time",
    fullTime: "Mid Level",
    pay: "$30/h",
    location: "Los Angeles CA",
  },
  {
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfWCH7uqkxI6CRjO-LkOzMP44HBmJY-bNPyKQS5oVmbeXevx1YKKfL0Dy&s=10",
    companyName: "Adobe",
    time: "2 Day ago",
    role: "Graphic Designer",
    partTime: "Full-Time",
    fullTime: "Junior Level",
    pay: "$28/h",
    location: "San Jose CA",
  },
  {
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKkYI2A6QTFHQIlwoUhm9EVlc_N461P5klgsNh34BvA&s",
    companyName: "Spotify",
    time: "7 Day ago",
    role: "Product Designer",
    partTime: "Part-Time",
    fullTime: "Senior Level",
    pay: "$32/h",
    location: "Boston MA",
  },
];

  
  return (
    <>
      {jobs.map((val)=>{
         return <Card company= {val.companyName} time={val.time} role={val.role}
       partTime={val.partTime} fullTime={val.fullTime} amount={val.pay} 
       location={val.location} url={val.logoUrl} />
      })}
  
    </>
  )
}

export default App
