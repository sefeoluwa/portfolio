import Blog from "./Blog";
import Startup1 from "./Startup1";
import Startup2 from "./Startup2";
import IP1 from "./IP1";
import spotify from "../../assets/tech"
import startup2 from "./Startup2";

const article = [
    {
        name: "IP1",
        id: "IP1",
        description: "IP IP IP IP IP IP IP IP",
        link: "./IP1",
        metaImg: spotify

    },
    {
        name: "Startup1",
        id: "startup1",
        description: "IP IP IP IP IP IP IP IP",
        link: Startup1,
        metaImg: spotify

    },
    {
        name: "Startup2",
        id: "startup2",
        description: "IP IP IP IP IP IP IP IP",
        link: startup2,
        metaImg: spotify

    },
]


export {
    Blog,
    Startup1,
    Startup2,
    IP1,
    article,
}