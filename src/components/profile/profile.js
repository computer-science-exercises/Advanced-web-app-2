import React from "react";
import personIcon from "../../assets/person-icon.svg";
import HttpService from "../../services/httpService";
import swal from 'sweetalert';

const {useState} = require("react");

const Profile = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    React.useEffect(() => {
            HttpService.getUserById({id: 1}).then(res => {
                    let user = res.data;
                    setMail(user.mail);
                    setName(user.name);
                    setPhoneNumber(user.phoneNumber)
                }
            )
        }, [false]
    );


    return (
        <div className="d-flex flex-column align-items-center">
            <img src={personIcon}/>
            <h1>Profile</h1>
            <form className="w-75 px-5 py-2">
                <div className="form-group py-3">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           placeholder="Enter full name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group py-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"
                           value={mail}
                           onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div className="form-group py-3">
                    <label>Phone Number</label>
                    <input type="phone" className="form-control" aria-describedby="phoneNumber"
                           placeholder="Enter phone number"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
            </form>
            <button className="btn btn-primary"
                    onClick={() => {
                        updateUser()
                    }}
            >Update
            </button>
        </div>
    )

    function updateUser() {
        HttpService.updateUser(
            {id: 1, name: name, mail: mail, phoneNumber: phoneNumber}
        ).then((res) => {
            swal({
                title: "Done!",
                text: "your profile has been updated",
                icon: "success",
                timer: 2000,
                button: false
            })
        }).catch(() => {
            swal({
                title: "Sorry!",
                text: "there has been a problem",
                icon: "error",
                timer: 2000,
                button: false
            })
        })
    }
}

export default Profile;
