const country_name = document.createElement('h1')
const country_area = document.createElement('h2')
const country_population = document.createElement('h2')
const country_capital = document.createElement('h2')
const country_flag = document.createElement('img')
const country_coat = document.createElement('img')
// const country_borders = document.createElement('h2')


function get_info() {
    fetch(`https://restcountries.com/v3.1/name/${search_inpt.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0])
            country_name.innerHTML = data[0].altSpellings[2]
            country_info.append(country_name)

            country_area.innerHTML = `${data[0].area} km2`
            country_info.append(country_area)

            country_population.innerHTML = `${data[0].population} people`
            country_info.append(country_population)

            country_capital.innerHTML = data[0].capital[0]
            country_info.append(country_capital)

            country_flag.setAttribute('src', data[0].flags.png)
            country_info.append(country_flag)

            country_coat.setAttribute('src', data[0].coatOfArms.png)
            country_info.append(country_coat)
            country_coat.style.width = '200px'
            country_flag.style.width = '200px'

        })
        .catch((err) => console.log(err))
}

submit_button.addEventListener('click', get_info)