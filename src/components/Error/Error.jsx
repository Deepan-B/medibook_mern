
const Error = ({ errmsg }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
          <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold">{errmsg}</h3>
    </div>
  )
}

export default Error
