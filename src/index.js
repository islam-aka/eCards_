import { createContext } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store/Store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
export const Context = createContext(null)

root.render(
	<StrictMode>
		<BrowserRouter>
			<Context.Provider
				value={{
					store: new Store(),
				}}
			>
				<App />
			</Context.Provider>
		</BrowserRouter>
	</StrictMode>
)
