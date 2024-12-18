import { Dispatch, SetStateAction, TransitionEvent } from "react";

interface Props {
  item: { color: string },
  activeItem: { color: string },
  index: number,
  activeIndex: number,
  activeZIndex: number,
  setActiveZIndex: Dispatch<SetStateAction<number>>,
  setOverflow: Dispatch<SetStateAction<'hidden' | 'visible'>>
  setBgColor: Dispatch<SetStateAction<string>>
}

export function ColorItem({ 
  item, 
  activeItem,
  index , 
  activeIndex, 
  activeZIndex,
  setActiveZIndex, 
  setOverflow, 
  setBgColor

}: Props) {

  // y = envelop height / 2 + box-color height / 2 + padding top 
  const y = 160 - 18 + 16
  
  function handleTransitionEnd(e: TransitionEvent) {
    const target = e.target as HTMLElement ;
    const type = target.dataset!.type ;

    if(type == 'container') {
      setActiveZIndex(10)
      setOverflow('hidden')
      return
    } 
    
    if(type == 'inner') {
      setBgColor(activeItem.color)
    }
  }

  return (
    <div 
      key={index}
      data-type="container"
      className={`w-9 h-9 ${activeIndex == index ? 'active' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      style={{ 
        transform: `translateY(${y}px)`,
        zIndex: activeIndex == index ? activeZIndex : 10 
      }}
    >
      <div 
        data-type="inner"
        className="w-full h-full rounded-full" 
        style={{ 
          backgroundColor: item.color,
          transform: 'scale(0.5)'
        }}
      />
    </div>
  )
}