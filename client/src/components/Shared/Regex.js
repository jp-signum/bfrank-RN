export const validEmailRegex = RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    strongPasswordRegex = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);