import React from 'react'

export class StatsS extends React.Component{
    render(){
        const {stats}=this.props
        return(
            
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
                                <td className="stats-d">{stats[0].base_stat}</td>
                                <td className="stats-d">{stats[1].base_stat}</td>
                                <td className="stats-d">{stats[2].base_stat}</td>
                                <td className="stats-d">{stats[3].base_stat}</td>
                                <td className="stats-d">{stats[4].base_stat}</td>
                                <td className="stats-d">{stats[5].base_stat}</td>
                                
                            </tr>
                        
                        </tbody>
                    </table>


                </div>
            </div>
        )
    }
}

