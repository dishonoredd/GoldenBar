// pending - в процессе выполнения
// fulfilled - выполнено (resolve) (then)
// rejected - отклонено (reject) (catch)

// 16823457

const p = new Promise((resolve, reject) => {
    console.log(1)

    setTimeout(() => {
        console.log(2)
        const data = "Text hello!"

        if (data.includes("hello")) {
            console.log(3)
            resolve(data)
            console.log(4)
        } else {
            reject({
                errorCode: 666,
                message: "Произошла ошибка",
            })
        }
        console.log(5)
    }, 1000)
})

console.log(6)

p.then((data) => {
    console.log(7)
    console.log("Успех", data)
}).catch((error) => {
    console.log("Ошибка", error.errorCode)
})

console.log(8)

type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.json()
    })
    .then((todo: Todo) => {
        console.log(todo, todo.title)
    })
