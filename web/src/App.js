import InputWebBaseComponent from '../../src/web/InputWebBaseComponent'
import InputHOC from '../../src/hoc/InputHOC'

const App = () => {
    const InputComponent = InputHOC(InputWebBaseComponent)
    return <InputComponent title='web' count={10} />
}

export default App