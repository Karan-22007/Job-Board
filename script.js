const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
    { id: 2, title: "Backend Developer", company: "Microsoft", location: "USA" },
    { id: 3, title: "UI/UX Designer", company: "Apple", location: "India" },
    { id: 4, title: "Full Stack Developer", company: "Amazon", location: "UK" },
    { id: 5, title: "Data Scientist", company: "Facebook", location: "Canada" },
    { id: 6, title: "Cyber Security Analyst", company: "Tesla", location: "Germany" },
    { id: 7, title: "AI Engineer", company: "OpenAI", location: "Remote" },
    { id: 8, title: "Blockchain Developer", company: "Binance", location: "Singapore" },
    { id: 9, title: "DevOps Engineer", company: "Netflix", location: "USA" },
    { id: 10, title: "Cloud Architect", company: "IBM", location: "India" },
    { id: 11, title: "Software Tester", company: "TCS", location: "India" },
    { id: 12, title: "Blockchain Developer", company: "Binance", location: "Singapore" },
    { id: 13, title: "Embedded Systems Engineer", company: "Intel", location: "USA" },
    { id: 14, title: "Mechanical Engineer", company: "Ford", location: "Germany" },
    { id: 15, title: "Marketing Manager", company: "Nike", location: "USA" },
    { id: 16, title: "SEO Specialist", company: "HubSpot", location: "Remote" },
    { id: 17, title: "HR Manager", company: "Deloitte", location: "UK" },
    { id: 18, title: "Accountant", company: "EY", location: "Australia" },
    { id: 19, title: "Digital Marketing Specialist", company: "Spotify", location: "Canada" },
    { id: 20, title: "Cloud Architect", company: "AWS", location: "Remote" },
    { id: 21, title: "Medical Data Analyst", company: "Pfizer", location: "India" },
    { id: 22, title: "Legal Advisor", company: "Goldman Sachs", location: "USA" },
    { id: 23, title: "Content Writer", company: "Medium", location: "Remote" },
    { id: 24, title: "Journalist", company: "BBC", location: "UK" },
    { id: 25, title: "Graphic Designer", company: "Canva", location: "Australia" },
    { id: 26, title: "Network Administrator", company: "Cisco", location: "Remote" },
    { id: 27, title: "Technical Support Engineer", company: "Dell", location: "India" },
    { id: 28, title: "Product Manager", company: "LinkedIn", location: "USA" },
    { id: 29, title: "Sales Manager", company: "Adidas", location: "Germany" },
    { id: 30, title: "IT Support Specialist", company: "Sony", location: "Canada" },
    { id: 31, title: "Business Analyst", company: "KPMG", location: "Singapore" },
    { id: 32, title: "AI Research Scientist", company: "OpenAI", location: "Remote" },
    { id: 33, title: "E-commerce Manager", company: "Amazon", location: "India" },
    { id: 34, title: "Software Engineer", company: "Meta", location: "UK" },
    { id: 35, title: "Electrical Engineer", company: "Siemens", location: "Germany" }
];

let selectedJobTitle = "";
let selectedButton = null;

function displayJobs(jobArray = jobs) {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Clear previous jobs

    jobArray.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <button onclick="openForm(this, '${job.title}')">Apply</button>
        `;
        jobList.appendChild(jobElement);
    });
}

function searchJobs() {
    const searchTerm = document.getElementById("search").value.trim().toLowerCase();
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) 
    );

    displayJobs(filteredJobs);
}

function openForm(button, jobTitle) {
    selectedJobTitle = jobTitle;
    selectedButton = button;
    
    document.getElementById("job-title").textContent = jobTitle;
    document.getElementById("application-form").classList.remove("hidden");
}

function closeForm() {
    document.getElementById("application-form").classList.add("hidden");
}

function submitApplication() {
    const name = document.getElementById("applicant-name").value.trim();
    const email = document.getElementById("applicant-email").value.trim();
    const resume = document.getElementById("resume").files[0];

    if (!name || !email || !resume) {
        alert("Please fill in all fields and upload a resume.");
        return;
    }

    // Simulate submission
    alert(`Application submitted for ${selectedJobTitle}!`);

    // Change button appearance
    selectedButton.textContent = "Applied";
    selectedButton.classList.add("applied");
    selectedButton.disabled = true;

    // Close form
    closeForm();
}

// Initialize job listings
document.addEventListener("DOMContentLoaded", () => displayJobs());
function openForm(button, jobTitle) {
    selectedJobTitle = jobTitle;
    selectedButton = button;

    document.getElementById("job-title").textContent = jobTitle;
    document.getElementById("application-form").style.display = "flex"; // Show form
}

function closeForm() {
    document.getElementById("application-form").style.display = "none"; // Hide form
}
