import './App.css'
import LibraryHeader from './component/LibraryHeader'
import LibraryBooks from './component/LibraryBooks'
import LibraryFooter from './component/LibraryFooter'
import LibraryLogin from './component/LibraryLogin'
import Office from './component/Office'

function App() {
  return (
    <div>
      <LibraryHeader />
      <main>
        <Office />
        <LibraryBooks />
        <LibraryLogin />
      </main>
      <LibraryFooter />
    </div>
  )
}

export default App