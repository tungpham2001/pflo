const ProjectBoxRight = ({ x, y, text, techStacks, backgroundImage}) => {
    const width = 418;
    const height = 268;
    return (
        <svg
            x={x} 
            y={y} 
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', left: `${x}px`, top: `${y}px` }}
        >
            <defs>
                <pattern id="backgroundImage" patternUnits="userSpaceOnUse" width="400" height="300">
                    <image href={backgroundImage} x="0" y="-140" width="400" height="600" />
                </pattern>
            </defs>
            <path d="M412.53 229.413V1H114.962L16.9 77.1377" stroke="black" stroke-width="2"/>
            <path d="M98.7385 38.587L114.639 1" stroke="black" stroke-width="2"/>
            <path d="M396.63 267L412.53 229.413" stroke="black" stroke-width="2"/>
            <path d="M396.63 39.0688L412.53 1" stroke="black" stroke-width="2"/>
            <path d="M396.63 267H1V114.725L99.0621 38.587H396.63V267Z" fill="url(#backgroundImage)" fill-opacity="0.5" stroke="black" stroke-width="2"/>
            <path d="M1 114.725L16.9 77.1377" stroke="black" stroke-width="2"/>
            <text x="380" y="80" fill="black" text-anchor="end">{text}</text>
            {techStacks.map((tech, index) => (
                <text key={index} x="20" y={140 + index * 20} fill="#5D5C61">{tech}</text>
            ))}
        </svg>
    );
};
  
export default ProjectBoxRight;