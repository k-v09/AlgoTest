import React, { useState } from "react";
import chroma from "chroma-js";
import '../css/Home.css';

const len = 200;
const hmul = 3;
const max_height = len * hmul;

const colors = [
    '#CAF0F8', // gpale
    '#90E0EF', // glight
    '#0077B6', // gmed
    '#023E8A'  // gdark
];
const alts = [
    '#640D6B',
    '#B51B75',
    '#E65C19',
    '#F8D082'
]

const colorScale = chroma.scale(colors).domain([0, max_height]);

class Bar {
    constructor(height) {
        this.height = height;
        this.index = null;
        this.width = 800 / len;
        this.color = this.getColor();
    }
    indexer(i) {
        this.index = i;
    }
    getColor() {
        return colorScale(this.height).hex();
    }
}
const rize = (arr) => {
    let currentIndex = arr.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

const Sorts = () => {
    let lis = [];
    const [ list, setList ] = useState(lis)
    const [ isRandom, setRandom ] = useState(false)
    const shuffleList = () => {
        setList(rize(lis));
        const ccel = document.getElementById('cc');
        for (let kids = 0; kids < ccel.children.length; kids ++) {
            ccel.children[0].remove();
            let qt = document.createElement("div")
            qt.id = `bar${kids}`; qt.className = "listBar"; qt.style.height = `${list[kids].height}px`; qt.style.width = `${list[kids].width}px`; qt.style.backgroundColor = list[kids].color;
            ccel.appendChild(qt);
        }
    }
    const toggleRandom = () => {
        setRandom(!isRandom)
    }
    for (let i = 0; i < len; i++) {
        lis.push(new Bar(hmul * (i + 1) - 4));
        lis[i].indexer(i);
    }

    return(
        <section className="page">
            <div className="heading">
                <h1 className="title">Sorting</h1>
            </div>
            <div className="section-container">
                <section className="chart-cont" id="cc">
                    {lis.map((bar, index) => (
                        <div
                            key={index}
                            id={`bar${index}`}
                            className="listBar"
                            style={{height: `${bar.height}px`, width: `${bar.width}px`, backgroundColor: bar.color}}
                        />
                    ))}
                </section>
                <button onClick={() => {shuffleList; toggleRandom}} className="sort-button" id="random">Randomize!</button>
            </div>
        </section>
    )
}

export default Sorts;
