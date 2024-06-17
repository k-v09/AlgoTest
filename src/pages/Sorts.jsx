import React from "react";
import chroma from "chroma-js";
import '../css/Home.css';

const len = 50;
const hmul = 12;
const max_height = len * hmul;

const colors = [
    '#CAF0F8', // gpale
    '#90E0EF', // glight
    '#0077B6', // gmed
    '#023E8A'  // gdark
];

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

const Sorts = () => {
    let lis = [];
    for (let i = 0; i < len; i++) {
        lis.push(new Bar(hmul * (i + 1) - 4));
        lis[i].indexer(i);
    }

    return(
        <section className="page">
            <div className="heading">
                <h1 className="title">Sorting</h1>
            </div>
            <section className="chart-cont">
                {lis.map((bar, index) => (
                    <div
                        key={index}
                        id={`bar${index}`}
                        className="listBar"
                        style={{height: `${bar.height}px`, width: `${bar.width}px`, backgroundColor: bar.color}}
                    />
                ))}
            </section>
        </section>
    )
}

export default Sorts;
