import React from 'react'

export const Skills = (skills) => {
    switch(skills.skills.length){
        case 1:
            return(
                <div className="Habilidades-main my-5">
                    <div className="Abilities"> <b>Abilities</b> </div>
                    <div className="habilidades3">
                        {skills.skills.map(abildes => (
                            <div key={abildes.name} className="habilidad-descripcion">
                                <div className="habilidad-nombre">
                                    <h6>{abildes.name}</h6>
                                </div>
                                <div className="desc-habil">
                                    <p className="descripcion2">{abildes.effect}</p>
                                </div>
                                
                            </div>
                            
                        ))}
                    </div>
                </div>
                
            )

        case 2:
            return(
                <div className="Habilidades-main my-5">
                    <div className="Abilities"> <b>Abilities</b> </div>
                    <div className="habilidades">
                        {skills.skills.map(abildes => (
                            <div key={abildes.name} className="habilidad-descripcion">
                                <div className="habilidad-nombre">
                                    <h6>{abildes.name}</h6>
                                </div>
                                <div className="desc-habil">
                                    <p className="descripcion">{abildes.effect}</p>
                                </div>
                                
                            </div>
                            
                        ))}
                    </div>
                </div>
            )

        case 3:
            return(
                <div className="Habilidades-main my-5">
                    <div className="Abilities"> <b>Abilities</b> </div>
                    <div className="habilidades2">
                        {skills.skills.map(abildes => (
                            <div key={abildes.name} className="habilidad-descripcion">
                                <div className="habilidad-nombre">
                                    <h6>{abildes.name}</h6>
                                </div>
                                <div className="desc-habil">
                                    <p className="descripcion">{abildes.effect}</p>
                                </div>
                                
                            </div>
                            
                        ))}
                    </div>
                </div>
            )
   }
}

