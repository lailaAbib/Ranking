import StartFirebase from "../firebaseConfig/index";
import React from 'react';
import { ref, onValue } from 'firebase/database';
import Table from 'react-bootstrap/Table'
import "./index.css"

const db = StartFirebase()

export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'ranking');

        onValue(dbRef, (snapshot) => {

            let ranking = [];

            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();

                ranking.push({ "key": keyName, "data": data });

            });
            console.log(ranking)

            ranking.sort(function (a, b) {
                return parseInt(b.data) - parseInt(a.data)
            })
            console.log(ranking)

            this.setState({ tableData: ranking })
        })
    }

    render() {
        return (
            <div className="tableRank">
                <Table bordered variant="success" striped hover="false">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Pontos</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{row.key}</td>
                                    <td>{row.data}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}