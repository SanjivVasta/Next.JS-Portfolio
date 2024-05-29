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
        <Hexagon x={680} y={50} icon="/images/icons/sql.png"/>
        <Hexagon x={740} y={155} icon="/images/icons/PHP.png"/>
        <Hexagon x={800} y={50} icon="/images/icons/Adobe.png"/>
      </div>
      
      {/* Small screen hexagons */}
      <div className="block md:hidden">
        <Hexagon x={30} y={20} icon="/images/icons/Java2.png"/> 
        <Hexagon x={70} y={20} icon="/images/icons/Python.png"/>
        <Hexagon x={230} y={-50} icon="/images/icons/JavaScript.png"/>
        <Hexagon x={110} y={-190} icon="/images/icons/RaspberryPi2.png"/>
        <Hexagon x={150} y={-190} icon="/images/icons/HTML.png"/>
        <Hexagon x={190} y={-330} icon="/images/icons/CSS.png"/>
        <Hexagon x={270} y={-400} icon="/images/icons/React.png"/>
        <Hexagon x={30} y={-330} icon="/images/icons/C.png"/>
        <Hexagon x={110} y={-400} icon="/images/icons/sql.png"/>
        <Hexagon x={190} y={-470} icon="/images/icons/PHP.png"/>
        <Hexagon x={270} y={-540} icon="/images/icons/Adobe.png"/>
      </div>
    </div>
  );
};

export default Skills;