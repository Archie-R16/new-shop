import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title?: string | number
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
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
            <Title title="React" />
            <Title title="RS" />
            <Title title="10" />
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
