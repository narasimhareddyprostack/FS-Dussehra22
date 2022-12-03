import React, { Component } from 'react'
import ContactList from './ContactList'
import Axios from 'axios'
import ContactDetails from './ContactDetails'
class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            sel_Contact: {}
        }
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({
                    contacts: response.data
                })
            })
            .catch()
    }
    user_Selected_Contact = (contact) => {
        console.log(contact.name.first)
        this.setState({ sel_Contact: contact })
    }
    render() {
        return (
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state.contacts)}</pre>
                <pre>{JSON.stringify(this.state.sel_Contact)}</pre>
                <h1>Contact APP</h1>
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.contacts.length > 0 ? <>
                                <ContactList user_Contacts={this.state.contacts} selected_Contact={this.user_Selected_Contact} />
                            </> : null
                        }
                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(this.state.sel_Contact).length > 0 ? <>
                                <ContactDetails user_Sel_Contact={this.state.sel_Contact} />
                            </> : null
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default ContactApp
