import React from 'react'
import ReactDOM from 'react-dom/client'
import { Title } from './Title'

type ContentProps = {
    p1: string
    p2: string
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.p1}</p>
            <p></p>
            <p>{props.p2}</p>
        </React.Fragment>
    )
}
function App() {
    return (
        <>
            <Title title="React" />
            <Title title="RS" />
            <Title title="10" />
            <Content p1="Helo bla bla world bla bla" p2="Hello 222 world 222" />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
