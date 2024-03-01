// Компоненты
const Card = {
    template: `
        <div class="card" style="width: 250px">
            <div class="card-header">Товар 1</div>
            <div class="card-body">Тут типо фото</div>
            <div class="card-footer">Цена: тебе не по карману</div>
        </div>
    `
}
const SpisokFu = {
    template: `
        <ul> Список двоечников
            <li>Кинсфатор Дмитрий</li>
            <li>Огинский Иван</li>
        </ul>
    `
}

// Конфигурация приложения
let app = {
    // Раздел с переменными
    data() {
        return {
            counter: 0,
            message: 'Привет, группа 1922с!',
            title: 'Это подсказка',
            message_form: '',
            type_input: 'password',
            theme_name: 'Темная тема',
            isDark: false,
            page: 'main',
            todos1: ['Умыться', 'Побриться', 'Пообедать'],
            todos2: [
                {time: '7.30', text: 'Умыться'},
                {time: '7.40', text: 'Побриться'},
                {time: '7.50', text: 'Пообедать'},
            ],
            posts: [],
            users: [],
        }
    },
    //
    mounted() {
        setInterval( () => {
            this.counter++
        }, 1000)
    },
    // Компоненты
    components: {
        Card,       // <card></card>
        SpisokFu,   // <spisok-fu></spisok-fu>
    },
    // Методы
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        },
        show() {
            this.type_input = 'text'
        },
        hide() {
            this.type_input = 'password'
        },
        theme(){
            this.isDark = !this.isDark;
            if (this.theme_name === 'Темная тема') {
                this.theme_name = 'Светлая тема'
            } else {
                this.theme_name = 'Темная тема'
            }
        },
        linkpage(link) {
            this.page = link;
        },
        getInfo() {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
            })
                .then( response => response.json() )
                .then( data => this.users = data)

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',
            })
                .then( response => response.json() )
                .then( data => this.posts = data)
        }
    }
}
let VueApp = Vue.createApp(app).mount('#app');
VueApp.getInfo();