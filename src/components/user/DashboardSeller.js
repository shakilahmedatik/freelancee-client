import DashboardNav from '../shared/navbar/DashboardNav'
import ConnectNav from '../user/ConnectNav'
import { Link } from 'react-router-dom'

const DashboardSeller = () => {
  return (
    <>
      <div className='container-fluid bg-secondary p-5'>
        <ConnectNav />
      </div>

      <div className='container-fluid p-4'>
        <DashboardNav />
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-10'>
            <h2>Your Gigs</h2>
          </div>
          <div className='col-md-2'>
            <Link to='/gigs/new' className='btn btn-primary'>
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSeller
