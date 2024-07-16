import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Alert>
        <AlertTitle>Hello World</AlertTitle>
        <AlertDescription>Component test</AlertDescription>
      </Alert>
    </>
  )
}

export default App
