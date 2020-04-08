import React from 'react';
import { Field } from 'redux-form';
import { renderField } from 'utils/formUtils/index';
import Button from 'react-bootstrap/Button';
import { reduxForm } from 'redux-form';
import { submitForm } from './submitForm';
import { required } from 'utils/formUtils/validator';
import { JoinMeetContainer, JoinMeetUpper } from './style';
const JoinMeetForm = (props) => {
    const {
        handleSubmit,
        change
    } = props;

    return(
        <JoinMeetUpper>
            <JoinMeetContainer>
                <div className="card indigo form-white">
                    <div className="card-body">
                        <h3 className="text-center white-text py-3"><i className="fa fa-user"></i> Start a new meeting:</h3>
                        
                        <Field
                            name="room"
                            type="text"
                            component={renderField}
                            placeholder={""}
                            label="Room Name"
                            validate={required}
                        />
                        <div className="text-center">
                            <Button
                                type="submit"
                                className="add-btn"
                                onClick={handleSubmit(formData => {
                                    submitForm({formData, change, ...props });
                                    }
                                )}
                            >Go</Button>
                        </div>
                    </div>
                </div>
            </JoinMeetContainer>
        </JoinMeetUpper>
    )
}

export default reduxForm({
    form: 'JoinMeetForm',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: false,
})(JoinMeetForm);