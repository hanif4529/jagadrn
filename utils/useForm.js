import { useState } from 'react';

const validateForm = (form, rules) => {
    const errors = {};
    Object.keys(form).forEach((key) => {
        if (rules[key]) {
            const rule = rules[key];
            const value = form[key];
            if (rule.required && !value) {
                errors[key] = rule.message;
            }
            if (rule.min && value.length < rule.min) {
                errors[key] = rule.message;
            }
            if (rule.max && value.length > rule.max) {
                errors[key] = rule.message;
            }
            if (rule.pattern && !rule.pattern.test(value)) {
                errors[key] = rule.message;
            }
            if (rule.confirm && form[rule.confirm] !== value) {
                errors[key] = rule.message;
            }
            // check if value is same with text
            if( rule.same && rule.same !== value){
                errors[key] = rule.message;
            }
        }
    })
    return errors;
};

const useForm = (initialValue, rules) => {
    const [form, setForm] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const onChange = (formType, formValue) => {
        setErrors(validateForm({...form, [formType]: formValue}, rules));
        setIsValid(Object.keys(validateForm({...form, [formType]: formValue}, rules)).length === 0);
        if (formType === 'reset') {
            return setForm(initialValue);
        }
        return setForm({ ...form, [formType]: formValue });
    }
    return {
        form,
        onChange,
        errors,
        isValid,
    }
};

export default useForm;