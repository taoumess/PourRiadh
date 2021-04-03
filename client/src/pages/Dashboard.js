import React from "react";
import { Button } from "react-bootstrap";

import API from "../utils/API";

export class Dashboard extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };

    render() {
        return (
            <div className="Dashboard">
                <h1>**********Dashboard***********</h1>
                <p>Bonjour {localStorage.getItem('prenom')} {localStorage.getItem('nom')} vous êtes bien connecté</p>
                <Button onClick={this.disconnect} block bsSize="large" type="submit">
                    Se déconnecter
        </Button>
            </div>
        );
    }
}