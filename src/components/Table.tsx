import { Dispatch } from 'react'
import arrowDown from '../assets/arrow-down.svg'
import edit from '../assets/edit-2.svg'
import trash from '../assets/trash-2.svg'
import { IUserRespose } from '../types'

const Table = ({
  data,
  setPage
}: {
  data: IUserRespose
  setPage: Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className="container px-8 pb-10">
      <div className="overflow-x-auto">
        <table className="table w-full border border-collapse rounded-lg">
          <thead>
            <tr>
              <th className="space-x-3">
                <input type="checkbox" className="checkbox" />
                <div className="inline space-x-1">
                  <span>User Info</span>
                  <img src={arrowDown} alt="" className="inline" />
                </div>
              </th>
              <th>About</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <input type="checkbox" className="checkbox" />
                    </div>
                    <div>
                      <img src={item.avatar} alt="" width={40} height={40} />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-[#101828]">
                        {item.first_name} {item.last_name}
                      </div>
                      <span className="text-[#667085]">{item.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="font-medium text-[#101828]">Some dummy Content</div>
                    <span className="text-[#667085]">Brings all your news into one place</span>
                  </div>
                </td>
                <td className="px-6 py-4 !border-r-0">
                  <span className="py-[2px] px-2 rounded-2xl bg-[#F2F4F7] text-[#344054] text-xs">
                    Random Sticker Label
                  </span>
                </td>
                <td className="p-4 text-right !border-l-0">
                  <button className="p-2">
                    <img src={trash} alt="" />
                  </button>
                  <button className="p-2">
                    <img src={edit} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pb-4 px-6 pt-3 flex justify-between items-center border border-t-0 text-[#344054] text-sm font-medium">
          <button className="px-[14px] py-2 border rounded-lg" onClick={() => setPage(e => e - 1)}>
            Previous
          </button>
          <span>
            Page {data.page} of {data.total_pages}
          </span>
          <button className="px-[14px] py-2 border rounded-lg" onClick={() => setPage(e => e + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
