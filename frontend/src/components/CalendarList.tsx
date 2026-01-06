

function CalendarList() {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>10</th>
                    <th>20</th>
                    <th>30</th>
                    <th>40</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="title">Juego 1</td>
                    <td><div className="barr start"></div></td>
                    <td><div className="barr middle"></div></td>
                    <td><div className="barr end"></div></td>
                    <td>{''}</td>
                </tr>
                <tr>
                    <td className="title">Juego juego juego</td>
                    <td><div className="barr start"></div></td>
                    <td><div className="barr end"></div></td>
                    <td>{''}</td>
                    <td><div className="barr alone"></div></td>
                </tr>
            </tbody>
        </table>
    );
}

export default CalendarList;
