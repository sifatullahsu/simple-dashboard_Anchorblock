import plus from '../assets/plus.svg'
import upload from '../assets/upload-cloud.svg'

const Heading = () => {
  return (
    <div className="container px-8 py-[34px]">
      <div className="flex justify-between">
        <h3 className="text-2xl leading-[38px] text-[#101828]">Users</h3>
        <div className="space-x-3">
          <button className="border border-[#D0D5DD] px-4 py-[10px] rounded-lg">
            <img src={upload} alt="" className="inline mr-2 pb-[2px]" />
            Import
          </button>
          <button className="border border-[#7F56D9] bg-[#7F56D9] text-white px-4 py-[10px] rounded-lg">
            <img src={plus} alt="" className="inline mr-2 pb-[2px]" /> Add User
          </button>
        </div>
      </div>
    </div>
  )
}

export default Heading
