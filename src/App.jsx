import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Card } from './components/Card'
import { getAllCharacters } from './redux/actions'
import './App.css'
import { Paginate } from './components/Paginate'
import { Navbar } from './components/Navbar'
import { History } from './components/History'
import { News } from './components/News'


function App() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(4)
  const characters = useSelector(state => state.characters)
  const max = characters.length / perPage
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCharacters())
  }, [])
  return (
    <>
      <a name="history"></a>
      <Navbar />
      <History />
      <section >
        <a name="characters"></a>
        <div className='text-bg-success h-100 d-flex flex-column justify-content-center'>
          <div className='img-back-two m-4 rounded'>
            <h2 className='text-center mt-5'>Some Characters</h2>
            <div className='container d-flex flex-row flex-wrap'>

              {characters.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(elem => <div className='col-3'> <Card name={elem.name} gender={elem.gender} status={elem.status} image={elem.image} /> </div>)}

            </div>
            <div className="d-flex flex-row justify-content-center">
              <Paginate page={page} setPage={setPage} max={max} />
            </div>
          </div>

        </div>
      </section>
      <a name='news'></a>
      <News />
    </>
  )
}

export default App
