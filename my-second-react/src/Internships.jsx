
import React, {useState} from "react"


function Internships(){
const data=[
  {
    "id": 1,
    "title": "Frontend Developer Intern",
    "company": "TechNova Solutions",
    "location": "Nairobi, Kenya",
    "type": "Remote",
    "stipend": "Ksh 15,000/month",
    "duration": "3 months",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "category": "Software Development",
    "image": "images/frontend.jpg"
  },
  {
    "id": 2,
    "title": "Backend Developer Intern",
    "company": "CodeBase Ltd",
    "location": "Mombasa, Kenya",
    "type": "On-site",
    "stipend": "Ksh 20,000/month",
    "duration": "6 months",
    "skills": ["Node.js", "Express", "MongoDB"],
    "category": "Software Development",
    "image": "images/backend.jpg"
  },
  {
    "id": 3,
    "title": "Cybersecurity Intern",
    "company": "SecureNet Africa",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 18,000/month",
    "duration": "4 months",
    "skills": ["Networking", "Ethical Hacking", "Wireshark"],
    "category": "Cybersecurity",
    "image": "images/cybersecurity.jpg"
  },
  {
    "id": 4,
    "title": "Data Analyst Intern",
    "company": "Data Insights KE",
    "location": "Nairobi, Kenya",
    "type": "Hybrid",
    "stipend": "Ksh 22,000/month",
    "duration": "3 months",
    "skills": ["Python", "Excel", "SQL", "Power BI"],
    "category": "Data Science",
    "image": "images/data.jpg"
  },
  {
    "id": 5,
    "title": "Machine Learning Intern",
    "company": "AI Labs Africa",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 25,000/month",
    "duration": "6 months",
    "skills": ["Python", "TensorFlow", "Pandas"],
    "category": "Artificial Intelligence",
    "image": "images/ml.jpg"
  },
  {
    "id": 6,
    "title": "UI/UX Design Intern",
    "company": "Creative Minds Studio",
    "location": "Kisumu, Kenya",
    "type": "On-site",
    "stipend": "Ksh 12,000/month",
    "duration": "3 months",
    "skills": ["Figma", "Adobe XD", "User Research"],
    "category": "UI/UX Design",
    "image": "images/uiux.jpg"
  },
  {
    "id": 7,
    "title": "Cloud Computing Intern",
    "company": "CloudNet Solutions",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 20,000/month",
    "duration": "4 months",
    "skills": ["AWS", "Azure", "Docker"],
    "category": "Cloud Computing",
    "image": "images/cloud.jpg"
  },
  {
    "id": 8,
    "title": "Mobile App Developer Intern",
    "company": "AppWorks Ltd",
    "location": "Nairobi, Kenya",
    "type": "Hybrid",
    "stipend": "Ksh 18,000/month",
    "duration": "5 months",
    "skills": ["Flutter", "Dart", "Firebase"],
    "category": "Mobile Development",
    "image": "images/mobile.jpg"
  },
  {
    "id": 9,
    "title": "DevOps Intern",
    "company": "DeployHub Africa",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 23,000/month",
    "duration": "6 months",
    "skills": ["CI/CD", "Docker", "Kubernetes"],
    "category": "DevOps",
    "image": "images/devops.jpg"
  },
  {
    "id": 10,
    "title": "IT Support Intern",
    "company": "TechCare Services",
    "location": "Nakuru, Kenya",
    "type": "On-site",
    "stipend": "Ksh 10,000/month",
    "duration": "3 months",
    "skills": ["Hardware", "Networking", "Troubleshooting"],
    "category": "IT Support",
    "image": "images/it.jpg"
  },
  {
    "id": 11,
    "title": "Game Developer Intern",
    "company": "Pixel Studios",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 17,000/month",
    "duration": "4 months",
    "skills": ["Unity", "C#", "Game Design"],
    "category": "Game Development",
    "image": "images/game.jpg"
  },
  {
    "id": 12,
    "title": "Blockchain Developer Intern",
    "company": "CryptoTech Africa",
    "location": "Nairobi, Kenya",
    "type": "Hybrid",
    "stipend": "Ksh 30,000/month",
    "duration": "6 months",
    "skills": ["Solidity", "Ethereum", "Smart Contracts"],
    "category": "Blockchain",
    "image": "images/blockchain.jpg"
  },
  {
    "id": 13,
    "title": "Network Engineer Intern",
    "company": "NetSecure Ltd",
    "location": "Mombasa, Kenya",
    "type": "On-site",
    "stipend": "Ksh 16,000/month",
    "duration": "3 months",
    "skills": ["Cisco", "Routing", "Switching"],
    "category": "Networking",
    "image": "images/network.jpg"
  },
  {
    "id": 14,
    "title": "Database Administrator Intern",
    "company": "DataCore Systems",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 21,000/month",
    "duration": "5 months",
    "skills": ["MySQL", "PostgreSQL", "Database Design"],
    "category": "Database Management",
    "image": "images/database.jpg"
  },
  {
    "id": 15,
    "title": "QA Tester Intern",
    "company": "QualitySoft Ltd",
    "location": "Nairobi, Kenya",
    "type": "Hybrid",
    "stipend": "Ksh 14,000/month",
    "duration": "3 months",
    "skills": ["Manual Testing", "Automation", "Selenium"],
    "category": "Quality Assurance",
    "image": "images/qa.jpg"
  },
  {
    "id": 16,
    "title": "Embedded Systems Intern",
    "company": "IoT Innovations",
    "location": "Kisumu, Kenya",
    "type": "On-site",
    "stipend": "Ksh 19,000/month",
    "duration": "6 months",
    "skills": ["C", "Microcontrollers", "Arduino"],
    "category": "Embedded Systems",
    "image": "images/embedded.jpg"
  },
  {
    "id": 17,
    "title": "AR/VR Developer Intern",
    "company": "VirtualX Africa",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 28,000/month",
    "duration": "5 months",
    "skills": ["Unity", "ARKit", "VR Development"],
    "category": "AR/VR",
    "image": "images/arvr.jpg"
  },
  {
    "id": 18,
    "title": "Technical Writer Intern",
    "company": "DocuTech Solutions",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 13,000/month",
    "duration": "3 months",
    "skills": ["Documentation", "Markdown", "API Docs"],
    "category": "Technical Writing",
    "image": "images/writer.jpg"
  },
  {
    "id": 19,
    "title": "AI Chatbot Developer Intern",
    "company": "SmartBots Ltd",
    "location": "Nairobi, Kenya",
    "type": "Hybrid",
    "stipend": "Ksh 26,000/month",
    "duration": "4 months",
    "skills": ["Python", "NLP", "Dialogflow"],
    "category": "Artificial Intelligence",
    "image": "images/chatbot.jpg"
  },
  {
    "id": 20,
    "title": "E-commerce Developer Intern",
    "company": "ShopEase Africa",
    "location": "Remote",
    "type": "Remote",
    "stipend": "Ksh 18,000/month",
    "duration": "5 months",
    "skills": ["Shopify", "WooCommerce", "JavaScript"],
    "category": "Web Development",
    "image": "images/ecommerce.jpg"
  }
];

const [filter,setFilter] = useState("All");

const handleClick = (type)=>{

    setFilter(type);
}

const FilterData = data.filter((internship) => {
    if (filter === "All") return true;
    return internship.type === filter || internship.category === filter;
});


    return(
<>
        <div>

            <div className="mt-10 px-6 py-8"> 
                <h1 className="text-lg text-orange-300 font-bold px-14 mt-10">FEATURED POSITIONS</h1>
                <p className="text-5xl  px-14 py-10">Fresh opportunities,<br></br> handpicked for<span className="text-orange-400"> you</span> </p>

                <a href="#" className="text-lg mt-20  px-6 hover:underline">view all internship lists</a>
            </div>

            <div>

                <form >
                   
                    <input type="text" id="search" placeholder="Search role,Company or Location" className=" flex-1 w-128  h-13 border border-gray-400 rounded-full  focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out text-gray-700 text-center py-2 px-2  mx-6 mb-10" />
                </form>
            </div>
        </div>

        <div>

            <div className=" flex flex-wrap gap-3 p-3">
              <h1 className="text-green-700">location</h1>
                <button onClick = {() =>  handleClick ("All")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 gap-2">All</button>
                  <button  onClick = {() =>  handleClick ("Remote")}className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Remote</button>
                    <button onClick = {() =>  handleClick ("Hybrid")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Hybrid</button>
            </div>

            <div className="flex  flex-wrap gap-3 p-3">
              <h1 className="text-green-700" >Category</h1>
              <button onClick = {()=> handleClick('All')}  className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 gap-2 ">All</button>
                <button onClick = {() =>  handleClick ("Networking")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 gap-2 ">Networking</button>
                  <button onClick = {() =>  handleClick ("Blockchain")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Blockchain</button>
                    <button onClick = {() =>  handleClick ("Software Development")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Software Development</button>
                      <button onClick = {() =>  handleClick ("Web Development")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Web Development</button>
                      <button onClick = {() =>  handleClick ("Cybersecurity")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Cyber Security</button>
                      <button onClick = {() =>  handleClick ("Artificial Intelligence")} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200 ">Artificial Intelligence</button>
            </div>
        </div>

        <div>
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FilterData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
           
            

            <div className="p-5">
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>

              {/* Company */}
              <p className="text-green-600 font-medium text-sm">
                {item.company}
              </p>

              {/* Location */}
              <p className="text-gray-500 text-sm">{item.location}</p>

              {/* Type + Duration */}
              <div className="flex justify-between text-sm mt-2 text-gray-500">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                  {item.type}
                </span>
                <span>{item.duration}</span>
              </div>

              {/* Stipend */}
              <p className="text-orange-400 font-bold mt-3">
                {item.stipend}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs border border-green-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
            
        


</>
    );

}

export default Internships