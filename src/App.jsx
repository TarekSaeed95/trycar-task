import { QueryClientProvider,QueryClient } from 'react-query'
import Navbar from './component/Navbar'
import Home from './component/Home'
const queryClient=new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Navbar/>
    <Home/>
    </QueryClientProvider>
  )
}

export default App