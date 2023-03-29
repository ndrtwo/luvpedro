const getCurrentDate = ()=> {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let currentDate = `${year}-${month}-${day}`
    return currentDate
}

let dateToday = getCurrentDate()
console.log(dateToday);

const renderData = (data)=> {
    const letterDate = document.getElementById('letter_date')
    const letterText = document.getElementById('letter_text')

    if (data.erro == false) {
        let date = data.mensagem[0].date
        let message = data.mensagem[0].message

        letterDate.innerText = date
        letterText.innerText = message
    } else {
        letterDate.innerText = dateToday
        letterText.innerText = 'Olá, Pedro\n\nOcorreu um erro e não foi possível receber a mensagem. Contacte o desenvolvedor'
    }
}

const requestMessage = (date)=> {
    let request = new XMLHttpRequest();
    request.open("GET", `https://love-messages-api.up.railway.app/messages/date/${date}`)
    request.onload = function() {
        try {
            if (request.status == 200) {
                let responseTxt = request.response;
                let responseObj = JSON.parse(responseTxt)
                renderData(responseObj)
            } else {
                const data = {
                    "erro": true
                }
                renderData(data)
                throw new Error('the request has failed')
            }
        } catch (error) {
            console.error(error)
        }
    }
    request.send()
}

requestMessage(dateToday)