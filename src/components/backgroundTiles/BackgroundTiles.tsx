import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import MachImage from "../../assets/mach.png";
import "./BackgroundTiles.css"

function BackgroundTiles() {
    const [columns, setColumns] = useState(0)
    const [rows, setRows] = useState(0)
    const [toggled, setToggled] = useState(false)

    const tilesContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setRows(Math.floor((tilesContainer.current?.clientHeight as number) / 50))
        setColumns(Math.floor(document.body.clientWidth / 50))

        tilesContainer.current?.style.setProperty("--columns", columns.toString())
        tilesContainer.current?.style.setProperty("--rows", rows.toString())

        window.addEventListener('resize', () => {
            setColumns(Math.floor(document.body.clientWidth / 50))
            setRows(Math.floor(document.body.clientHeight / 50))
        })
    }, [columns, rows])

    const handleTileClicked = (index: number) => {
        setToggled((prev) => !prev)
        anime({
            targets: ".tile",
            opacity: toggled ? 1 : 0,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        })
    }

    return (
        <div className="container">
            <div ref={tilesContainer} className="tiles-container">
                {
                    Array.from(Array(columns * rows)).map((_, index) => {
                        return <div
                            onClick={() => { handleTileClicked(index) }} 
                            data-testid="tile" 
                            className="tile"></div>
                    })
                }
            </div>
            <div id="title" className="centered" style={{ opacity: toggled ? 0 : 1 }}>
                Simple
                project
                <span className="fancy"> Mach Eight</span>.
            </div>
            <img id="icon" className="centered" src={MachImage} style={{ opacity: toggled ? 1 : 0 }}></img>
        </div>
    )
}

export default BackgroundTiles
