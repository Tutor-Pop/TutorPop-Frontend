import PropTypes from "prop-types";
import { connect } from "react-redux";

// ** Third Party Components
import BaseSelect from "react-select";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import Flatpickr from "react-flatpickr";

import {
    ISOToDatetime,
    datetimeToLocalString_CustomFormat,
} from "helpers/luxon";
import FixRequiredSelect from "./FixRequiredSelect";

export const FormGroup = (props) => {
    const renderText = () => {
        if (props.label != null) {
            return (
                <label className={`form-label ${props.classerLabel}`}>
                    {props.label}
                </label>
            );
        } else return <></>;
    };

    const renderSwitch = () => {
        switch (props.type) {
            case "text":
                return (
                    <>
                        {renderText()}
                        <input
                            type="text"
                            className={props.classerElement}
                            value={props.value}
                            onChange={(e) => props.onChange(e)}
                            placeholder={props.placeholder}
                            maxLength={props.maxLength}
                            required={props.required}
                            disabled={props.disabled}
                            onKeyPress={props.onKeyPress}
                        />
                    </>
                );
            case "number":
                return (
                    <>
                        {renderText()}
                        <input
                            type="number"
                            className={props.classerElement}
                            required={props.required}
                            placeholder={props.placeholder}
                            maxLength={props.maxLength}
                            pattern="[0-9]+([\.,][0-9]+)?"
                            onBlur={props.onBlur}
                            disabled={props.disabled}
                            value={props.value}
                            onChange={(e) => props.onChange(e)}
                        />
                    </>
                );
            case "password":
                return (
                    <>
                        {renderText()}
                        <input
                            type="password"
                            className={props.classerElement}
                            required={props.required}
                            placeholder={props.placeholder}
                            maxLength={props.maxLength}
                            disabled={props.disabled}
                            value={props.value}
                            onChange={(e) => props.onChange(e)}
                        />
                    </>
                );
            case "select":
                return (
                    <>
                        {renderText()}
                        <FixRequiredSelect
                            SelectComponent={BaseSelect}
                            className={props.classerElement}
                            placeholder={props.placeholder}
                            required={true}
                            classNamePrefix="select"
                            value={props.value}
                            defaultValue={
                                props.value === ""
                                    ? props.value
                                    : props.defaultValue
                            }
                            isDisabled={props.disabled}
                            onChange={(e) => props.onChange(e)}
                            options={props.options}
                            isClearable={false}
                            clearIndicator={false}
                        />
                    </>
                );
            case "date-time":
                return (
                    <>
                        {renderText()}
                        <Flatpickr
                            className={props.classerElement}
                            value={props.value}
                            onChange={(e) =>
                                props.onChange(
                                    datetimeToLocalString_CustomFormat(
                                        ISOToDatetime(e[0].toISOString()),
                                        "yyyy-LL-dd"
                                    )
                                )
                            }
                            // options={{ inline: true }}
                            placeholder={props.placeholder}
                            // readOnly={false}
                        />
                    </>
                );
            case "input-group-text":
                // To create input group
                // adornmentPosition expect to be ['start', 'end']
                // adornment expect to be string
                return (
                    <>
                        {renderText()}
                        <InputGroup
                            className={`${props.classerElement} ${
                                props.disabled && "disabled"
                            }`}
                            disabled={props.disabled}
                        >
                            {props.adornmentPosition === "start" && (
                                <InputGroupText>
                                    {props.adornmentStart}
                                </InputGroupText>
                            )}
                            <Input
                                type="text"
                                className={props.classerElement}
                                required={props.required}
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={(e) => props.onChange(e)}
                                disabled={props.disabled}
                            />
                            {props.adornmentPosition === "end" && (
                                <InputGroupText>
                                    {props.adornmentStop}
                                </InputGroupText>
                            )}
                        </InputGroup>
                    </>
                );
            case "input-group-number":
                // To create input group
                // adornmentPosition expect to be ['start', 'end']
                // adornment expect to be string
                return (
                    <>
                        {renderText()}
                        <InputGroup
                            className={`${props.classerElement} ${
                                props.disabled && "disabled"
                            }`}
                            disabled={props.disabled}
                        >
                            {props.adornmentPosition === "start" && (
                                <InputGroupText>
                                    {props.adornmentStart}
                                </InputGroupText>
                            )}
                            <Input
                                type="number"
                                required={props.required}
                                pattern="[0-9]+([\.,][0-9]+)?"
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={(e) => props.onChange(e)}
                                disabled={props.disabled}
                            />
                            {props.adornmentPosition === "end" && (
                                <InputGroupText>
                                    {props.adornmentStop}
                                </InputGroupText>
                            )}
                        </InputGroup>
                    </>
                );
            case "input-group-double-text":
                return (
                    <>
                        {renderText()}
                        <InputGroup
                            className={`${props.classerElement} ${
                                props.disabled && "disabled"
                            }`}
                            disabled={props.disabled}
                        >
                            <InputGroupText>
                                {props.adornmentStart}
                            </InputGroupText>
                            <Input
                                type="text"
                                required={props.required}
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={(e) => props.onChange(e)}
                                disabled={props.disabled}
                            />
                            <InputGroupText>
                                {props.adornmentStop}
                            </InputGroupText>
                        </InputGroup>
                    </>
                );
            case "input-group-double-number":
                return (
                    <>
                        {renderText()}
                        <InputGroup
                            className={`${props.classerElement} ${
                                props.disabled && "disabled"
                            }`}
                            disabled={props.disabled}
                        >
                            <InputGroupText>
                                {props.adornmentStart}
                            </InputGroupText>
                            <Input
                                type="number"
                                required={props.required}
                                pattern={`[0-9]+([\.,][0-9]+)?`}
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={(e) => props.onChange(e)}
                                disabled={props.disabled}
                            />
                            <InputGroupText>
                                {props.adornmentStop}
                            </InputGroupText>
                        </InputGroup>
                    </>
                );
            default:
                return "foo";
        }
    };

    return (
        <div className={`form-group ${props.classerOutside}`}>
            {renderSwitch()}
        </div>
    );
};

FormGroup.defaultProps = {
    adornmentStart: "",
    adornmentStop: "",
    adornmentPosition: "start",
    classerOutside: "",
    classerLabel: "",
    classerElement: "",
    value: "",
    value2: "",
    Formvalue: "",
    label: null,
    defaultValue: null,
    desc: "",
    errorText: "",
    errorCondition: false,
    type: "input-text",
    name: "",
    name2: "",
    pattern: "",
    placeholder: "",
    required: false,
    readonly: false,
    disabled: false,
    onChange: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    options: [],
    unit: "",
    wrapperClass: "",
    icon: "",
    idElement: "",
    isFocused: false,
    rows: 4,
    minValue: null,
    minlength: null,
    maxValue: null,
    maxLength: null,
    dateFormat: "DD/MM/YYYY",
    step: 0.01,
};

FormGroup.propTypes = {
    adornmentStart: PropTypes.string,
    adornmentStop: PropTypes.string,
    adornmentPosition: PropTypes.string,
    classerOutside: PropTypes.string,
    classerLabel: PropTypes.string,
    classerElement: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.object,
    ]),
    value2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    label: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    desc: PropTypes.string,
    errorText: PropTypes.string,
    errorCondition: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    name2: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    options: PropTypes.array,
    unit: PropTypes.string,
    wrapperClass: PropTypes.string,
    icon: PropTypes.string,
    idElement: PropTypes.string,
    isFocused: PropTypes.bool,
    rows: PropTypes.number,
    maxValue: PropTypes.number,
    minlength: PropTypes.number,
    maxLength: PropTypes.number,
    dateFormat: PropTypes.string,
    step: PropTypes.number,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(FormGroup);
