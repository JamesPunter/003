import { useRef, useState, useCallback } from 'react'

export default function DeviceLoader() {
  const [dragging, setDragging] = useState(false)
  const [rotation, setRotation] = useState({ x: -20, y: 0 })
  const lastPos = useRef({ x: 0, y: 0 })

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setDragging(true)
    lastPos.current = { x: e.clientX, y: e.clientY }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setRotation(prev => ({
      x: Math.max(-80, Math.min(80, prev.x - dy * 0.5)),
      y: prev.y + dx * 0.5,
    }))
  }, [dragging])

  const onPointerUp = useCallback(() => {
    setDragging(false)
  }, [])

  return (
    <>
      <style>{`
        .macbook {
          width: 150px;
          height: 96px;
          position: relative;
          perspective: 500px;
          cursor: grab;
          transform: scale(2);
          transform-origin: center center;
        }
        .macbook:active { cursor: grabbing; }

        .macbook .shadow {
          position: absolute;
          width: 60px;
          height: 0px;
          left: 40px;
          top: 160px;
          transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
          box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
        }

        .macbook .inner {
          z-index: 20;
          position: absolute;
          width: 150px;
          height: 96px;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .macbook .screen {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #ddd;
          transform-style: preserve-3d;
          transform-origin: 50% 93px;
          transform: rotateX(0deg);
          background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0) 100%);
          background-position: left bottom;
          background-size: 300px 300px;
          box-shadow: inset 0 3px 7px rgba(255,255,255,0.5);
        }

        .macbook .screen .face-one {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #d3d3d3;
          transform: translateZ(2px);
          background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%);
        }

        .macbook .screen .face-one .camera {
          width: 3px;
          height: 3px;
          border-radius: 100%;
          background: #000;
          position: absolute;
          left: 50%;
          top: 4px;
          margin-left: -1.5px;
        }

        .macbook .screen .face-one .display {
          width: 130px;
          height: 74px;
          margin: 10px;
          background-color: #000;
          background-size: 100% 100%;
          border-radius: 1px;
          position: relative;
          box-shadow: inset 0 0 2px rgba(0,0,0,1);
        }

        .macbook .screen .face-one .display .shade {
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: 74px;
          background: linear-gradient(-135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 47%, rgba(255,255,255,0) 48%);
          background-size: 300px 200px;
          background-position: 0px 0px;
        }

        .macbook .screen .face-one span {
          position: absolute;
          top: 85px;
          left: 57px;
          font-size: 6px;
          color: #666;
        }

        .macbook .macbody {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #cbcbcb;
          transform-style: preserve-3d;
          transform-origin: 50% bottom;
          transform: rotateX(-90deg);
          background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%);
        }

        .macbook .macbody .face-one {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          transform-style: preserve-3d;
          background: #dfdfdf;
          transform: translateZ(-2px);
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%);
        }

        .macbook .macbody .touchpad {
          width: 40px;
          height: 31px;
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 4px;
          margin: -44px 0 0 -18px;
          background: #cdcdcd;
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%);
          box-shadow: inset 0 0 3px #888;
        }

        .macbook .macbody .keyboard {
          width: 130px;
          height: 45px;
          position: absolute;
          left: 7px;
          top: 41px;
          border-radius: 4px;
          transform-style: preserve-3d;
          background: #cdcdcd;
          background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%);
          box-shadow: inset 0 0 3px #777;
          padding: 0 0 0 2px;
        }

        .macbook .keyboard .key {
          width: 6px;
          height: 6px;
          background: #444;
          float: left;
          margin: 1px;
          transform: translateZ(-2px);
          border-radius: 2px;
          box-shadow: 0 -2px 0 #222;
        }

        .macbook .key.space { width: 45px; }
        .macbook .key.f { height: 3px; }

        .macbook .macbody .pad {
          width: 5px;
          height: 5px;
          background: #333;
          border-radius: 100%;
          position: absolute;
        }
        .macbook .pad.one { left: 20px; top: 20px; }
        .macbook .pad.two { right: 20px; top: 20px; }
        .macbook .pad.three { right: 20px; bottom: 20px; }
        .macbook .pad.four { left: 20px; bottom: 20px; }
      `}</style>
      <div
        className="relative flex items-center justify-center w-full max-w-2xl lg:max-w-3xl aspect-[4/3]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="macbook">
          <div
            className="inner"
            style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(0deg)` }}
          >
            <div className="screen">
              <div className="face-one">
                <div className="camera" />
                <div className="display">
                  <div className="shade" />
                </div>
                <span>MacBook Air</span>
              </div>
            </div>
            <div className="macbody">
              <div className="face-one">
                <div className="touchpad" />
                <div className="keyboard">
                  {Array.from({ length: 59 }).map((_, i) => (
                    <div key={i} className={`key${i === 5 ? ' space' : ''}`} />
                  ))}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={`f${i}`} className="key f" />
                  ))}
                </div>
              </div>
              <div className="pad one" />
              <div className="pad two" />
              <div className="pad three" />
              <div className="pad four" />
            </div>
          </div>
          <div className="shadow" />
        </div>
      </div>
    </>
  )
}
