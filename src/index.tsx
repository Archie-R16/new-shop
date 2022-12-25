import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ullam, perferendis et quaerat sequi totam saepe
                molestias porro, dicta aspernatur, iusto ab adipisci facilis
                dolorem sed tempora eligendi vero deleniti.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ullam, perferendis et quaerat sequi totam saepe
                molestias porro, dicta aspernatur, iusto ab adipisci facilis
                dolorem sed tempora eligendi vero deleniti.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ullam, perferendis et quaerat sequi totam saepe
                molestias porro, dicta aspernatur, iusto ab adipisci facilis
                dolorem sed tempora eligendi vero deleniti.
            </p>
        </React.Fragment>
    )
}
function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
