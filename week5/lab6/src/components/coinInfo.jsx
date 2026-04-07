import { use, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(null)
    useEffect(() => {

    }, [symbol])
}

export default CoinInfo