import React from "react"

import axios from "axios"


export default async (route) => {
    try {
        return await axios.get(route, {
            headers:{
                'Content-Type': 'application/json'
            }

        })
    } catch (e) {
        console.log(e)
    }
}