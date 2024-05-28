import React from 'react';
import Hexagon from './Carousel';

const Skills = () => {
  return (
    <div className="relative w-full h-96 md:h-10vh">
      {/* Large screen hexagons */}
      <div className="hidden md:block">
        <Hexagon x={200} y={50} icon="/images/icons/Java2.png"/> 
        <Hexagon x={260} y={155} icon="/images/icons/Python.png"/>
        <Hexagon x={500} y={155} icon="/images/icons/JavaScript.png"/>
        <Hexagon x={320} y={50} icon="/images/icons/RaspberryPi2.png"/>
        <Hexagon x={380} y={155} icon="/images/icons/HTML.png"/>
        <Hexagon x={440} y={50} icon="/images/icons/CSS.png"/>
        <Hexagon x={560} y={50} icon="/images/icons/React.png"/>
        <Hexagon x={620} y={155} icon="/images/icons/C.png"/>
        <Hexagon x={680} y={50} icon="/images/icons/SQL.png"/>
        <Hexagon x={740} y={155} icon="/images/icons/PHP.png"/>
        <Hexagon x={800} y={50} icon="/images/icons/Adobe.png"/>
      </div>
      
      {/* Small screen hexagons */}
      <div className="block md:hidden">
        <Hexagon x={30} y={20} icon="/images/icons/Java2.png"/> 
        <Hexagon x={85} y={10} icon="/images/icons/Python.png"/>
        <Hexagon x={305} y={-90} icon="/images/icons/JavaScript.png"/>
        <Hexagon x={140} y={-280} icon="/images/icons/RaspberryPi2.png"/>
        <Hexagon x={195} y={-290} icon="/images/icons/HTML.png"/>
        <Hexagon x={250} y={-480} icon="/images/icons/CSS.png"/>
        <Hexagon x={360} y={-580} icon="/images/icons/React.png"/>
        <Hexagon x={30} y={-500} icon="/images/icons/C.png"/>
        <Hexagon x={140} y={-600} icon="/images/icons/SQL.png"/>
        <Hexagon x={250} y={-700} icon="/images/icons/PHP.png"/>
        <Hexagon x={360} y={-800} icon="/images/icons/Adobe.png"/>
      </div>
    </div>
  );
};

export default Skills;