import React from "react";
import personIcon from "../../assets/person-icon.svg";
import HttpService from "../../services/httpService";
import swal from 'sweetalert';

const {useState} = require("react");

const Order = (props) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div className="d-flex flex-column align-items-center">
            <img src={personIcon}/>
            <h1>Order</h1>
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
                        createOrder()
                    }}
            >Create Order
            </button>
        </div>
    )

    function createOrder() {
        HttpService.createOrder(
            {id: 1, name: name, mail: mail, phoneNumber: phoneNumber}, props.groceries
        ).then((res) => {
            swal({
                title: "Done!",
                text: "your order was succesfully made",
                icon: "success",
                timer: 2000,
                button: false
            })
            props.setCartGroceries([]);
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

export default Order;
