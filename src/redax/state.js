let state = {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ]
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Anton'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Ivan'},
                {id: 4, name: 'Artem'},
                {id: 5, name: 'Maxim'},
            ],
            messages: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Hello World!'},
                {id: 3, message: 'I\'m fine.'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Does not matter'},
            ]
        }
    }

export default state;