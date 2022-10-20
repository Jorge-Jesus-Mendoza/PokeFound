import React from 'react'

export const StatsL = ({stats}) => {
  return (
    <table>
        <tbody>

        
            <tr>
                <th className="stats-h">Hp</th>
                <th className="stats-h">Att</th>
                <th className="stats-h">Def</th>
                <th className="stats-h">s-att</th>
                <th className="stats-h">s-def</th>
                <th className="stats-h">Speed</th>   
            </tr>
            <tr>
                <td className="stats-d">{stats[0].base_stat}</td>
                <td className="stats-d">{stats[1].base_stat}</td>
                <td className="stats-d">{stats[2].base_stat}</td>
                <td className="stats-d">{stats[3].base_stat}</td>
                <td className="stats-d">{stats[4].base_stat}</td>
                <td className="stats-d">{stats[5].base_stat}</td>
                
            </tr>
        
        </tbody>
    </table>
  )
}
