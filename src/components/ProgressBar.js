import useFormContext from '../hooks/useFormContext'

const ProgressBar = () => {
    const { page, title } = useFormContext()

    const interval = 100 / Object.keys(title).length

    const progress = ((page + 1) * interval).toFixed(2)

    const steps = Object.keys(title).map((step, i) => {
        return <div key={i} className="barmarker">Step {i + 1}</div>
    })

    // Renders with every input event
    // Will fix next => in optimization tutorial
    console.log('render')

    return (
        <section className="progress-container">
            <div className="barmarker-container">
                {steps}
            </div>
            <progress className="progress" max="100" value={progress}></progress>
        </section>
    )
}
export default ProgressBar