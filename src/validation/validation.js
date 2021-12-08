export const initialState = {
    name: "",
    lastname: "",
    phone: "",
    email1: "",
    email2: ""
}


export const validateEmail = (email) => {

    const validaMail = /\S+@\S+\.\S+/
    return validaMail.test(email)

}
export const validateName = (name) => {

    const validateName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s,]+$/
    return validateName.test(name)
}

export const validatePhone = (phone) => {

    const validatePhone = /^[\d]{11}$/
    return validatePhone.test(phone)
}