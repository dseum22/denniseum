import React, { Component } from 'react'

export default class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    container = (node) => {
        let indexValue = 0;
        const animate = () => {
            setTimeout(animate, this.props.duration);
            const img = node.querySelectorAll('img');
            for (let i = 0; i < img.length; i++) {
                img[i].style.opacity = '0';
                img[i].style.display = 'none';
            }
            indexValue++;
            if (indexValue > img.length) { indexValue = 1 }
            img[indexValue - 1].style.opacity = '1';
            img[indexValue - 1].style.display = 'block';
        }
        if (!this.props.constant) {
            animate();
        }
    }
    componentDidMount = () => {
        let temp = [];
        for (let i = 1; i < this.props.count + 1; i++) {
            temp.push(`${process.env.PUBLIC_URL}/images/${this.props.src}-${i}.png`);
        };
        this.setState({
            images: temp
        });
    }
    render() {
        return this.state.images ? (
            <div className={this.props.className} ref={this.container}>
                {this.state.images.map((item, index) => <img className='rounded-lg transition-opacity duration-500 ease-in-out border-2 border-white' src={item} key={index} alt={index} />)}
            </div>
        ) : (<></>)
    }
}
