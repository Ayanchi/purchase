import * as React from "react";
import {useSearchParams} from "react-router-dom";
import {Box, Button, TextField} from "@mui/material";
import s from "./Login.module.css";
import {useForm} from "react-hook-form";
import * as yup from "yup";

const Login = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const [searchParams] = useSearchParams();
    const param = searchParams.get("role");

    const onSubmit = data => {
        console.log(data); // You can handle form submission here
    };

    const validationSchema = yup.object().shape({
        orgItn: yup
            .string()
            .matches(/^\d{10}$/, 'Пожалуйста, введите действительный 10-значный ИНН.')
            .required('ИНН обязателен')
            .test('is-number', 'ИНН должен содержать только цифры', value => {
                return /^\d+$/.test(value);
            }),
        orgName: yup.string().required('Укажите название организации.'),
        bossName: yup.string().required('Укажите имя директора'),
        bossPin: yup
            .string()
            .matches(/^\d{10}$/, 'Пожалуйста, введите действительный 10-значный ПИН.')
            .required('ПИН обязателен')
            .test('is-number', 'ПИН должен содержать только цифры', value => {
                return /^\d+$/.test(value);
            }),
        passportId: yup
            .string()
            .matches(/^\d{7}$/, 'Пожалуйста, введите действительный 7-значный ID паспорта.')
            .required('ID паспорта обязателен')
            .test('is-number', 'ID должен содержать только цифры', value => {
                return /^\d+$/.test(value);
            }),
        bossFullName: yup.string().required('ФИО руководителя обязателен'),
        password: yup
            .string()
            .required('Пароль обязателен')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Пароль должен иметь длину не менее 8 символов и включать хотя бы одну строчную букву, одну прописную букву и одну цифру."
            ),
        email: yup.string()
            .email('Введите корректный email адрес')
            .required('Email обязателен')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Введите корректный email адрес'),
    });


    const renderFields = (fields) => {
        return fields.map((field, index) => (
            <TextField
                key={index}
                required
                id={field.name}
                label={field.label}
                type={field.type || "text"}
                fullWidth
                {...register(field.name, {
                    validate: value => validationSchema.validateAt(field.name, {[field.name]: value})
                        .then(() => true)
                        .catch((error) => error.message)
                })}
                onChange={(e) => setValue(field.name, e.target.value)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
            />
        ));
    };

    const formFields = {
        procuring: [

            {name: "orgItn", label: "ИНН организации", type: "number"},
            {name: "orgName", label: "Наименование организации"},
            {name: "bossName", label: "Имя директора"},
            {name: "bossPin", label: "ПИН руководителя", type: "number"},
            {name: "bossFullName", label: "ФИО руководителя"},
            {name: "password", label: "Password", type: "password"}
        ],
        supplier: [

            {name: "orgItn", label: "ИНН поставщика", type: "number"},
            {name: "orgName", label: "Наименование поставщика"},
            {name: "passportId", label: "ID паспорта", type: "number"},
            {name: "bossFullName", label: "ФИО руководителя"},
            {name: "password", label: "Password", type: "password"}
        ],
        user: [
            {name: "bossFullName", label: "ФИО"},
            {name: 'email', label: 'Email'},
            {name: "orgItn", label: "ИНН", type: "number"},
            {name: "password", label: "Password", type: "password"}
        ],
    }


    return (
        <div className="container">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1},
                    mb: 5
                }}
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                {param === "procuring" && (
                    <div>
                        <div className={s.registerTitle}>Регистрация Закупающих организаций</div>
                        <div className={s.registrationBlock}>{renderFields(formFields.procuring)}</div>
                    </div>
                )}

                {param === "supplier" && (
                    <div>
                        <div className={s.registerTitle}>Регистрация поставщиков</div>
                        <div className={s.registrationBlock}>{renderFields(formFields.supplier)}</div>
                    </div>
                )}

                {param === "user" && (
                    <div>
                        <div className={s.registerTitle}>Регистрация</div>
                        <div className={s.registrationBlock}>{renderFields(formFields.user)}</div>
                    </div>
                )}

                {param !== "procuring" && param !== "supplier" && param !== "user" && (
                    <div>Неправильная роль</div>
                )}
                <Button type="submit" variant="contained">Зарегистрироваться</Button>
            </Box>
        </div>
    );
};

export default Login;
