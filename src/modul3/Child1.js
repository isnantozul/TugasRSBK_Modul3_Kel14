import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "Zulfikar"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => {
            if (state.nama === "Zulfikar") {
                return { nama: "Fandi" }
            } else {
                return { nama: "Fandi" }
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('Anak 1 akan Hilang')
    }
    render() {
        return (
            <div>
                <h4>Aku Anak-1</h4>
                <button onClick={this.ubahNama}>Ganti nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;