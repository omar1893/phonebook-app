export const isInvalid = (firstName: string, lastName: string, phoneNumber: string): boolean => {
    if (firstName === "" || lastName === "" || phoneNumber.toString().length < 7) {
        return true
    } 
    return false
}