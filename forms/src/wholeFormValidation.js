export function ValidateForm(data) {
    let errors = [];
    if (!data.email.toLowerCase().startsWith(data.name.toLowerCase())) {
        errors.push("Adres e-mail musi zaczynać się od imienia!");
    }
    return errors;
}