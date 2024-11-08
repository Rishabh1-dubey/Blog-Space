
import { Avatar } from './BlogCard'

const AppBar = () => {
  return (
    <div className='flex justify-between p-4 border-b border-slate-600'>
        <div className='ml-12'>Blog-spave image

        </div>
        <div className='mr-6'>
            <Avatar name='rishabh'/>
        </div>
    </div>
  )
}

export default AppBar