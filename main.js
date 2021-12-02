
const butResidents = document.getElementById('but')

butResidents.addEventListener('click', residFunc)

butResidents.addEventListener('mouseover', () => {
	butResidents.style.backgroundColor = 'blue'
    butResidents.style.color = 'white'
})

butResidents.addEventListener('mouseout', () => {
	butResidents.style.backgroundColor = 'darkgoldenrod'
    butResidents.style.color = 'darkblue'
})

function residFunc(){
        axios.get('https://swapi.dev/api/planets/2')
        .then(res => {
            let elem = res.data.residents
            for(let i = 0; i < elem.length; i++){
                let urlRes = elem[i]
                axios.get(urlRes)
                .then((res) => {
                    let newRes = document.createElement('h2')
                    newRes.textContent = res.data.name
                    document.body.appendChild(newRes)
                })
            }
        }
    )
}

    
