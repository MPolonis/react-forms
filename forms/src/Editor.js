import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";
import { ValidateForm } from "./wholeFormValidation";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            emailConfirm: ""

        }

        this.rules = {
            name: {required: true, minlength: 3, alpha: true},
            email: {required: true, email: true, equals: "emailConfirm"},
            emailConfirm: {required: true, email: true, equals: "email"}
        }
    }


    updateFormValue = (e) => {
        this.setState({[e.target.name]: e.target.value});
            
    }

    updateFormValueCheck = (e) => {
        this.setState({[e.target.name]: e.target.checked});
    }

    render() {
        return (
            <div className="h5 bg-info text-white p-2">

                <FormValidator data={this.state} rules={this.rules} submit={this.props.submit}
                    ValidateForm={ValidateForm}>
                    <ValidationMessage field="form" />
                    <div className="form-group">
                        <label>Imię</label>
                        <input className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="name" />
                    </div>
                    {/* <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox" name="terms"
                                checked={this.state.terms}
                                onChange={this.updateFormValueCheck} />
                            <label className="form-check-label">
                                Zapoznałem się z regulaminem.
                            </label>
                        </div>
                        <ValidationMessage field="terms" />
                    </div> */}
                    <div className="form-group">
                        <label>E-mail</label>
                        <input className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="email" />
                    </div>
                    <div className="form-group">
                        <label>Powtórz E-mail</label>
                        <input className="form-control"
                            name="emailConfirm"
                            value={this.state.emailConfirm}
                            onChange={this.updateFormValue} />
                        <ValidationMessage field="emailConfirm" />
                    </div>
                </FormValidator>
                

                {/* <div className="form-group">
                    <label>Zamówienie</label>
                    <textarea className="form-control" name="order"
                        value={this.state.order}
                        onChange={this.updateFormValue} />
                </div> */}

                {/* <div className="form-group">
                    <label>Dodatki do lodów</label>
                    {this.toppings.map(top =>
                        <div className="form-check" key={top}>
                            <input className="form-check-input"
                                type="checkbox" name={top}
                                value={this.state[top]}
                                checked={this.state.toppings.indexOf(top) > - 1}
                                onChange={this.updateFormValueCheck} />
                            <label className="form-check-label">{top}</label>
                        </div>
                    )}
                </div> */}

                {/* <div className="form-group">
                    <label>Smaki lodów</label>
                    {this.flavors.map(flavor =>
                        <div className="form-check" key={flavor}>
                            <input className="form-check-input"
                                type="radio" name="flavor"
                                value={flavor}
                                checked={this.state.flavor === flavor} 
                                onChange={this.updateFormValue} />
                            <label className="form-check-label">
                                {flavor}    
                            </label>
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox" name="twoScoops"
                            checked={this.state.twoScoops}
                            onChange={this.updateFormValueCheck} />
                        <label className="form-check-label">Dwie gałki</label>
                    </div>
                </div> */}

                {/* <div className="form-group">
                    <label>Smaki lodów</label>
                    <select className="form-control"
                        name="flavor" value={this.state.flavor}
                        onChange={this.updateFormValue}>
                        {this.flavors.map(flavor =>
                            <option value={flavor} key={flavor}>
                                {flavor}
                            </option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Dodatki do lodów</label>
                    <select className="form-control" multiple={true}
                        name="toppings" value={this.state.toppings}
                        onChange={this.updateFormValueOptions}>
                        {this.toppings.map(top => 
                            <option value={top} key={top}>
                                {top}
                            </option>)}
                    </select>
                </div> */}
            </div>
        )
    }
}