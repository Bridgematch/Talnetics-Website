
export const joinWaitlist = async( details )=>{
//     console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
//    console.log(process.env.NEXT_PUBLIC_WEB_APP_TOKEN)
//    console.log(process.env.BACKEND_URL)
//    console.log(process.env.WEB_APP_TOKEN)
    try {
        const {fullname, email, category} = details;

    const data = {
        email: email,
        fullname: fullname,
        category: category
    }
    //console.log(JSON.stringify(data))
    //save to the api
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/waitlist/join`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Token': process.env.NEXT_PUBLIC_WEB_APP_TOKEN
        }
    });

    
    const result = await response.json()
    if(response.ok && result){
        // join waitlist succesful
        return "You have successfully joined the waitlist"
    }

        return "Operation not successful please try again"
    } catch (error) {
        console.log(error)
        return "An Error has Occured: Operation Not successful " //{status: "Failed", message: error}
       // throw new Error(error)
    } 


}