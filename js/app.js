const addItems = () => {
    const items = [
        {
            icon: './img/icons/loop.svg',
            text: "Lorem ipsum dolor sit amet"
        },
        {
            icon: './img/icons/sale.svg',
            text: "Сonsecteturadipiscing elit"
        },
        {
            icon: './img/icons/doc.svg',
            text: "Sed do eiusmod tempor"
        },
        {
            icon: './img/icons/mail.svg',
            text: "Esse cillum doloreeu fugiat"
        },
        {
            icon: './img/icons/money.svg',
            text: "Excepteur sint occaecat cupidatat non proident"
        }
    ]
    const container = document.querySelector(".order_list")
    items.forEach((el, index) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'order_list_item')

        const divImg = createImage(el.icon)

        const divText = document.createElement('div')
        divText.setAttribute('class', 'order_list_item_text')
        divText.textContent = el.text
        const dots = document.createElement('div')
        dots.setAttribute('class', 'dots')
        for (i = 0; i < 5; i++) {
            const dot = document.createElement('div')
            dot.setAttribute('class', 'dot')
            dots.append(dot)
        }
        div.append(divImg)
        div.append(divText)
        container.append(div)
        container.append(dots)
    })

}
const createImage = (icon) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'order_list_item_img')
    const divImg = document.createElement('img')
    divImg.setAttribute('src', icon)
    div.append(divImg)
    return div
}
addItems()
const form = () => {
    const fileInput = document.querySelector('#upload-file')
    const fileLabel = document.querySelector('#label-file')
    fileInput.addEventListener('change', () => {
        fileLabel.innerHTML = fileInput.files[0].name;
    })
    const rangeInput = document.querySelector('#input-range')
    const rangeLabel = document.querySelector('#input-label')
    rangeLabel.innerHTML = `${rangeInput.value}%`
    rangeInput.addEventListener('change', (el)=>{
        rangeLabel.innerHTML = `${el.target.value}%`
    })
    const select = document.querySelector('.select')

    document.addEventListener('click', (e) => {
        const outsideClick = e.composedPath().includes(select);
        select.classList.toggle('opened')
        if ( !outsideClick ) {
            select.classList.remove('opened')
        }
        select.querySelectorAll('.option').forEach((el) => {
            el.addEventListener('click', () => {
                select.querySelector('input').value = el.textContent
            })
        })
    })
}
form()

const burger = () => {
    const burg = document.querySelector(".burger")
    const menu = document.querySelector(".menu")
    burg.addEventListener('click', ()=>{
        burg.classList.toggle('opened')
        menu.classList.toggle('opened')
        
    })
}
burger()