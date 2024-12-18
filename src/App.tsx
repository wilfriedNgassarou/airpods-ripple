import { useState } from "react"
import { ColorItem } from "./components/color-item";
import { AirpodsBox } from "./components/airpods-box";
import { Credits } from "./components/credits";

function App() {
  const items = [
    {
      color: '#ef4444'
    },
    {
      color: '#fb923c'
    },
    {
      color: '#eab308'
    },
    {
      color: '#0284c7'
    },
    {
      color: '#059669'
    },
    {
      color: '#8b5cf6'
    },
    {
      color: '#334155'
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeZIndex, setActiveZIndex] = useState(10) ;
  // After the scale transition, we set the background color of the container. 
  const [bgColor, setBgColor] = useState(items[0].color) ;
  // After the translateY transition, we hide the overflowing content.
  const [overflow, setOverflow] = useState<'hidden' | 'visible'>('hidden')

  // I have used getBoundingClientRect() to determine this x value ( the gap between each box ).
  const x = 37.328125 ;

  return (
    <section className="w-full h-dvh flex items-center justify-center bg-white">
      <Credits />
      <section className="flex flex-col w-80 overflow-hidden">
        <div 
          className="w-full h-60 relative flex justify-between items-center"
          style={{ backgroundColor: bgColor, overflow, borderRadius: 48 }}
        >
          <div className="absolute inset-0 px-8 flex justify-between items-center">
            {
              items.map((item, index) => (
                <ColorItem
                  key={index}
                  index={index} 
                  item={item}
                  activeIndex={activeIndex}
                  activeItem={items[activeIndex]}
                  activeZIndex={activeZIndex}
                  setActiveZIndex={setActiveZIndex}
                  setBgColor={setBgColor}
                  setOverflow={setOverflow}
                />
              ))
            }
          </div>
          <AirpodsBox />
        </div>
        <div className="w-full relative pt-4 pb-2 px-8 z-20 bg-white flex justify-between items-center">
          <div className="left-0 px-8 absolute h-10 flex items-center w-full">
            <div className="h-full w-full flex items-center border-black">
              <div
                className="h-8 w-8 rounded-full aspect-square border-[1px] duration-200"
                style={{ 
                  transform: `translateX(${(activeIndex * x)}px) scale(1.15)`,
                  borderColor: items[activeIndex].color 
                }} 
              />
            </div>
          </div>
          {
            items.map((item, index) => (
              <div 
                key={index}
                onClick={() => {
                  if(activeIndex == index) return 

                  setActiveZIndex(30)
                  setActiveIndex(index)
                  setOverflow('visible')
                }}
                className="w-8 h-8 relative rounded-full cursor-pointer"
                style={{ backgroundColor: item.color }}
              />
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default App
