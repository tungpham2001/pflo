const PROJECTS = [
    {
        id: 1,
        name: "Lucidity",
        location: "Location One",
        briefDescription: "Brief description of Project One",
        fullDescription: "Full description of Project One",
        techStack: ["React", "Node.js"],
        responsibilities: "Responsibilities in Project One"
    },
    {
        id: 2,
        name: "Stress-Free Schedule Support (SFSS)",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 3,
        name: "Time to Kill",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 4,
        name: "tsuteung",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 5,
        name: "Waste Wizard Classification",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 6,
        name: "Marine Object Detection",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 7,
        name: "WeatherNow",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 8,
        name: "ScheduleChecked",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    },
    {
        id: 9,
        name: "LOGGED",
        location: "Location Two",
        briefDescription: "Brief description of Project Two",
        fullDescription: "Full description of Project Two",
        techStack: ["Vue", "Firebase"],
        responsibilities: "Responsibilities in Project Two"
    }
    // Add more projects as needed
];

function ScrollList({ setSelectedProject }) {

    return (
        <div>
            {PROJECTS.map((project) => (
                <div key={project.id} onClick={() => setSelectedProject(project)} style={{ padding: '10px', margin: '5px', background: 'lightgrey', cursor: 'pointer' }}>
                    <h4>{project.name}</h4>
                    <p>{project.briefDescription}</p>
                    <p>{project.techStack.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default ScrollList;