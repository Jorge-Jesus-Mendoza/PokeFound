import React from 'react'

export const StatsS = ({stats}) => {
  return (
    <div className="stats2 fuente">
        <div className="centrado">
            <table>
                <tbody>

                
                    <tr>
                        <th className="stats-m">Hp</th>
                        <th className="stats-m">Att</th>
                        <th className="stats-m">Def</th>
                        <th className="stats-m">s-att</th>
                        <th className="stats-m">s-def</th>
                        <th className="stats-m">Speed</th>   
                    </tr>
                    <tr>
                        <td className="stats-d">{stats.hp}</td>
                        <td className="stats-d">{stats.attack}</td>
                        <td className="stats-d">{stats.defense}</td>
                        <td className="stats-d">{stats.s_attack}</td>
                        <td className="stats-d">{stats.s_defense}</td>
                        <td className="stats-d">{stats.speed}</td>
                        
                    </tr>
                
                </tbody>
            </table>


        </div>
    </div>
  )
}
