import React, { Component } from "react";
class Child2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('Anak ke-2 Akan Hilang')
    }
    render() {
        return (
            <div>
                <h4>Aku Anak-2</h4>
                <button onClick={this.tambahAngka}>Tambah</button>
                <button onClick={this.kurangiAngka}>Kurang</button>
                <br />
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;