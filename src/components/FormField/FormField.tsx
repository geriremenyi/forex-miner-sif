import React from 'react';
import { IconContext } from 'react-icons';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { generateRandomId } from '~common/functions/misc';

import { FormFieldType, IFormFieldProps, IFormFieldState } from '.';

import formFieldStyles from './FormField.module.scss';

/**
 * Form field (a.k.a. input) component implementation
 */
export class FormField extends React.Component<IFormFieldProps, IFormFieldState> {

    /**
     * Object referencing to the actual input inside the component
     */
    private input: HTMLInputElement | null = null;

    /**
     * Component initialization
     * 
     * @param props Form field props
     */
    constructor(props: IFormFieldProps) {
        super(props);

        this.state = {
            fieldId: `${FormField.name}_${this.props.type}_${generateRandomId()}`,
            currentFormFieldType: this.props.type
        };

        this.handleIconClick = this.handleIconClick.bind(this);
        this.handleShowHidePasswordIconClick = this.handleShowHidePasswordIconClick.bind(this);
    }

    /**
     * Component render
     * 
     * @returns The rendered react node
     */
    public render(): React.ReactNode {
        return (
            <div className={formFieldStyles.formFieldWrapper}>
                { this.props.label ?
                    <div className={formFieldStyles.labelWrapper}>
                        <label htmlFor={this.state.fieldId}>{this.props.label}</label>
                    </div>
                    : ''
                }
                <div className={`${formFieldStyles.inputWrapper}`}>
                    { this.props.icon ?
                        <IconContext.Provider value={{ size: formFieldStyles.iconSize }}>
                            <div className={formFieldStyles.iconWrapper} onClick={this.handleIconClick}>
                                { this.props.icon }
                            </div>
                        </IconContext.Provider>
                        : ''
                    }
                    <input
                        ref={(input) => this.input = input}
                        id={this.state.fieldId} 
                        type={this.state.currentFormFieldType}
                        onChange={this.props.onChange}
                        required={this.props.required}
                        pattern={this.props.pattern}
                    />
                    { this.props.type === FormFieldType.Password ?
                        <IconContext.Provider value={{ size: formFieldStyles.iconSize }}>
                            <div className={formFieldStyles.passwordIconWrapper} onClick={this.handleShowHidePasswordIconClick}>
                                { this.props.type === this.state.currentFormFieldType ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                            </div>
                        </IconContext.Provider>
                        : ''
                    }
                </div>
            </div>
        );
    }

    /**
     * Handle the click on the form field icon
     * Sets the focus to the input
     */
    private handleIconClick() {
        this.input?.focus();
    }

    /**
     * Handle the show/hide password icon click
     * Sets the current form field type in the state to plain text so the password is visible
     */
    private handleShowHidePasswordIconClick() {
        this.setState({
            currentFormFieldType: this.props.type === this.state.currentFormFieldType ? FormFieldType.Text : FormFieldType.Password
        });
    }
}