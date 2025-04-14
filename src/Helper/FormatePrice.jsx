

const FormatePrice = ({ Price, discount }) => {

    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(Price / 100, discount / 100)
}

export default FormatePrice