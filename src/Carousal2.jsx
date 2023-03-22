
import Card from "./Card"
import events from "./data"

export default function Carousal2() {
    return (
        <div className="carousel lg:max-h-[25rem] max-h-[20rem]">
            {
                events.map((e, key) => {
                    var id = "slide" + (key);
                    var prev = key === 0 ? "#slide" + (events.length - 1) : "#slide" + (key - 1);
                    var nxt = key === events.length - 1 ? "#slide0" : "#slide" + (key + 1);

                    var end = events.length
                    console.log(id, prev, nxt, end);
                    return (
                        <div id={id} className="carousel-item relative w-full">
                            <Card key={key} name={e.name} description={e.description} img={e.eventImg} />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={prev} className="btn btn-circle">❮</a>
                                <a href={nxt} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}