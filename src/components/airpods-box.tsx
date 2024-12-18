export function AirpodsBox() {
  return (
    <div
      style={{
        boxShadow: `
          inset 0 0 10px rgba(255, 255, 255, 1),
          inset 0px 36px 10px rgba(255, 255, 255, 0.2)
        `
      }} 
      className="relative w-full h-full z-50 flex flex-col"
    >
      <div className="h-1/3 flex items-center justify-center">
        <div className="h-[1px] flex-grow backdrop-brightness-[0.8]"/>
        <div className="h-2 w-2/5 backdrop-brightness-[0.7] rounded-full overflow-hidden"/>
        <div className="h-[1px] flex-grow backdrop-brightness-[0.8]"/>
      </div>
      <div className="h-2/3 w-full flex pb-6 justify-center items-end">
        <div
          style={{ boxShadow: '0 0 2px rgba(255, 255, 255, 1)' }}
          className="h-8 w-8 border-transparent rounded-full overflow-hidden" 
        />
      </div>
    </div>
  )
}