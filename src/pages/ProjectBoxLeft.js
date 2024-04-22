const ProjectBoxLeft = ({ x, y, text, techStacks, backgroundImage}) => {
    return (
      <svg
        x={x} 
        y={y} 
        width="414" 
        height="268" 
        viewBox="0 0 414 268" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: `${x}px`, top: `${y}px` }}
      >
        <defs>
            <pattern id="backgroundImage" patternUnits="userSpaceOnUse" width="400" height="300">
              <image href={backgroundImage} x="0" y="-140" width="400" height="600" />
            </pattern>
        </defs>
        <path d="M1.00003 229.413V1H298.567L396.629 77.1377" stroke="black" stroke-width="2"/>
        <path d="M314.791 38.587L298.891 1" stroke="black" stroke-width="2"/>
        <path d="M16.9 267L1.00004 229.413" stroke="black" stroke-width="2"/>
        <path d="M16.9 39.0688L1.00004 1" stroke="black" stroke-width="2"/>
        <path d="M16.8999 267H412.529V114.725L314.467 38.5869H16.8999V267Z" fill="url(#backgroundImage)" fill-opacity="0.7" stroke="black" stroke-width="2"/>
        <path d="M412.529 114.725L396.629 77.1377" stroke="black" stroke-width="2"/>
        <text x="30" y="80" fill="white">{text}</text>
        {techStacks.map((tech, index) => (
          <text key={index} x="310" y={140 + index * 20} fill="white">{tech}</text>
        ))}
      </svg>
    );
};
  
export default ProjectBoxLeft;