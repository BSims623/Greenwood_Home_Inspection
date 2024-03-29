// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Landing, About, Services, SampleReport, Contact, Error } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    //errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'sample-report',
        element: <SampleReport />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
