function Description({ PROJECTS }) {
    if (!PROJECTS) return <div>Please select a project to see the details.</div>;

    return (
        <div>
            <h2>{PROJECTS.name}</h2>
            <p><strong>Location:</strong> {PROJECTS.location}</p>
            <p><strong>Description:</strong> {PROJECTS.fullDescription}</p>
            <p><strong>Tech Stack:</strong> {PROJECTS.techStack.join(', ')}</p>
            <p><strong>Responsibilities:</strong> {PROJECTS.responsibilities}</p>
        </div>
    );
}

export default Description;