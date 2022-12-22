class Link extends HTMLElement {
    #to = ''
    #text = ''

    static get observedAttributes() {
        return ['to', 'text']
    }

    attributeChangedCallback(property, _oldValue, newValue) {
        if (property === 'to') {
            this.#to = newValue
        } else if (property === 'text') {
            this.#text = newValue
        }

        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `<a href="${this.#to}">${this.#text}</a>`

        this.querySelector('a').addEventListener('click', (evt) => {
            evt.preventDefault()
            console.log('hallo')
        })
    }
}

const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000))

class HelloWorld extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = "loading"

        await sleep()

        const list = [1,2,3,4]
        this.innerHTML = `
            <fhs-link to="test" text="hallo"></fhs-link>
            <ul>
                ${list.map((element) => `<li>${element}</li>`).join('')}
            </ul>    
        `
    }
}

customElements.define('fhs-link', Link)
customElements.define('fhs-hello-world', HelloWorld)