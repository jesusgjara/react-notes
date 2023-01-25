import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
const CreateNotes = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className='btn'>
          <IoIosArrowBack />
        </Link>
      </header>
    </section>
  )
}

export default CreateNotes