const Input = ({
  label,
  name,
  type = 'text',
  error
}: {
  label: string
  name: string
  type?: 'text' | 'password'
  error?: string
}) => {
  return (
    <div>
      <div className="label">{label}</div>
      <input
        type={type}
        name={name}
        placeholder="Type here"
        className="px-[14px] py-[10px] border rounded-lg w-full text-base text-[#A9ACB5]"
        style={{
          border: `1px solid ${error ? '#FDA29B' : '#D6BBFB'}`,
          boxShadow: `0px 0px 0px 4px ${
            error ? '#FEE4E2' : '#F4EBFF'
          }, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
        }}
      />
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default Input
