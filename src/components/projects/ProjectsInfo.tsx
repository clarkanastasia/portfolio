import whaleSpotting from "./img/whale_spotting.png"
import zooManagement from "./img/zoo_management.png"
import shopManagement from "./img/shop_management.png"
import bookish from "./img/bookish.png"
import jokes from "./img/jokes_api.png"
import todoList from "./img/todo_list.png"

const projects = [
    {
        imgSrc: whaleSpotting,
        title: "Whale Spotting",
        description: "Group project to create a website dedicated to whale spotting that allows registered users to create posts with their whale sightings. The website also provides information about whale spotting hotspots and has an achievements system to reward active users to encourage more whale spotting.",
        techStack: ["C#", "PostgreSQL", "React", "Bootstrap"],
        repo: "https://github.com/techswitch-learners/whale-spotting-spring-2024"
    },
    {
        imgSrc: zooManagement,
        title: "Zoo Management",
        description: "C# web API application managing a virtual zoo with animals housed in enclosures, connected to a Postgres database and React frontend. The API has various endpoints to retrieve information such as details of individual animals, a list of animals within specific enclosures, a list of animals filtered by a search query and to add new animals.",
        techStack: ["C#", "PostgreSQL", "React", "TypeScript"],
        repo: "https://github.com/clarkanastasia/zoo-management"
    },
    {
        imgSrc: shopManagement,
        title: "Shop Management",
        description: "Console application simulating a shop interface for both managers and customers. Managers can edit the shop inventory by adding new items, increasing stock levels and viewing items in stock. Customers can register with the stop, view available items, add products to their basket and finalise their purchase.",
        techStack: ["C#"],
        repo: "https://github.com/clarkanastasia/shop-management"
    },
    {
        imgSrc: bookish,
        title: "Bookish",
        description: "C# MVC application to manage a library where librarians can access a book catalogue to add books, edit book details or remove books from the catalogue. The application also allows a librarian to assign book loans to library members, automatically updating the number of available copies and setting due-by dates for returns.",
        techStack: ["C#", "PostgreSQL", "Entity Framework"],
        repo: "https://github.com/clarkanastasia/bookish"
    },
    {
        imgSrc: jokes,
        title: "Joke Generator App",
        description: "Web application that allows users to generate two-part jokes from an external RESTful API.  The user interface shows the first part of the joke retrieved from the API with the punchline hidden. The user has a button to reveal the punchline and a button to generate another joke.",
        techStack: ["HTML", "CSS", "JavaScript", "EJS", "REST API"],
        repo: "https://github.com/clarkanastasia/joke-generator-app"
    },
    {
        imgSrc: todoList,
        title: "To-Do List App",
        description: "Web application that allows users to add items to their to-do list and mark them as completed by selecting a checkbox, which strikes through the item. The application creates a local server using Express.js which allows the user to dynamically add or remove items from the to-do list.",
        techStack: ["HTML", "CSS", "JavaScript", "EJS", "Express.js"], 
        repo: "https://github.com/clarkanastasia/todo-list-app"
    }
]

export default projects